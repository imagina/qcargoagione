import { onMounted, ref, onBeforeUnmount } from "vue";
import scaleStore from '../stores/scale'
import { getScalesList, getScaleMeasuresList } from '../services/getScales'
import cache from 'modules/qsite/_plugins/cache';

export default function mainController() {

    const chartsData = ref({ "type": "lineChart", "dataLabels": ["May", "Jun", "Jul", "Aug", "Sep", "Oct"], "dataSets": [{ "label": "scale", "backgroundColor": "transparent", "borderColor": "#FF4500", "data": [40, 20, 72, 13, 104, 0] },] })
    onMounted(async () => {
        await getScalesList();
        if(scaleStore.scaleList.length === 1) {
            await cache.set("scaleId", scaleStore.scaleList[0].id);
        }
        const scaleId =
            (await cache.get.item("scaleId")) !== "null"
                ? await cache.get.item("scaleId")
                : null;

        scaleStore.scaleId = scaleStore.scaleList.find(item => item.id == scaleId)?.id || null;
        if (!scaleStore.scaleId) {
            scaleStore.showModal = true;
        } else {
            await scaleStore.setInt();
            await getScaleMeasuresList();
        }

    })
    onBeforeUnmount(() => {
        scaleStore.clearIntervalFuntion();
    })
    return { chartsData, getScaleMeasuresList, scaleStore };

}
