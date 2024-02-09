import baseService from 'modules/qcrud/_services/baseService.js'
import scaleStore from '../stores/scale'

export async function postScalePrint(): Promise<void> {
    try {
        scaleStore.loadingPrint = true;
        const response = await baseService.post('apiRoutes.qcargoagione.scalesPrint', {criteria: scaleStore.scaleId} );
        scaleStore.measureId = response.data.measureId;
        scaleStore.formPrint = {
         ...scaleStore.formPrint,
         ...response.data,
        };
        delete scaleStore.formPrint.status
        scaleStore.loadingPrint = false;
    } catch (error) {
        scaleStore.loadingPrint = false;
        scaleStore.loadingMeasuresList = false;
        console.log(error);
    }
}

export async function postMeasures(): Promise<void> {
    try {
        await baseService.create('apiRoutes.qcargoagione.scaleMeasures',{ ...scaleStore.formPrint } );
    } catch (error) {
       console.log(error);
    }
}
