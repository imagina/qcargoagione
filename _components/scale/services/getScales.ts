import baseService from 'modules/qcrud/_services/baseService.js'
import scaleStore from '../stores/scale'
import qRampStore from 'modules/qramp/_store/qRampStore';

export async function getMeasure(): Promise<void> {
    try {
        const response = await baseService.show('apiRoutes.qcargoagione.measure', scaleStore.scaleId, { refresh: true });
        scaleStore.measure = response.data;
    } catch (error) {
        scaleStore.clearIntervalFuntion();
        scaleStore.loadingMeasuresList = false;
        scaleStore.loadingPrint = false;
        console.log(error);
    }

}

export async function getScalesList(): Promise<void> {
    try {
        const params = {
            params: {
                filter: {
                    status: true,
                }
            }
        }
        const response = await baseService.index('apiRoutes.qcargoagione.scales', params);
        scaleStore.scaleList = response.data.map(item => ({ label: item.name, value: item.id, id: item.id }));
    } catch (error) {
        scaleStore.loadingMeasuresList = false;
        scaleStore.loadingPrint = false;
        console.log(error);
    }

}

export async function getScaleMeasuresList(refresh = false): Promise<void> {
    try {
        scaleStore.loadingMeasuresList = true;
        const response = await baseService.index('apiRoutes.qcargoagione.scaleMeasures', {
            refresh, params: {
                filter: {
                    scaleId: scaleStore.scaleId,
                    order: {
                        field: "created_at",
                        way: "desc",
                    },
                }
            }
        });
        scaleStore.scaleMeasuresList = response.data;
        scaleStore.loadingMeasuresList = false;
    } catch (error) {
        scaleStore.loadingMeasuresList = false;
        scaleStore.loadingPrint = false;
        console.log(error);
    }
}

export async function getFlightaware(): Promise<void> {
    try {
        const flightNumber: any = scaleStore.formPrint.flightNumber;
        const params = {
            refresh: true,
            params: {
                filter: { search: flightNumber?.toUpperCase() },
            },
        };
        const response = await baseService.index("apiRoutes.qfly.flightaware", params);
        if (response.status == 200) {
            scaleStore.dataTable = qRampStore().getTableListOfFlights(response.data);
            scaleStore.modalTable = true;
        }
    } catch (error) {
      console.log(error);
      scaleStore.modalTable = false;
    }
}
