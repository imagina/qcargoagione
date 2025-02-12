import baseService from 'modules/qcrud/_services/baseService.js'
import scaleStore from '../stores/scale'

export async function confirmPrint(confirmed: boolean = false): Promise<void> {
    try {
        scaleStore.loadingPrint = true;
        await baseService.create('apiRoutes.qcargoagione.confirm',{measureId: scaleStore.measureId,  confirmed} );
        scaleStore.loadingPrint = false;
    } catch (error) {
        scaleStore.loadingPrint = false;
        scaleStore.loadingMeasuresList = false;
        console.log(error);
    }
}
