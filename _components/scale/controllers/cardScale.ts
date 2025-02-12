
import { computed } from "vue";
import scaleStore from "../stores/scale";
import { postScalePrint } from '../services/postScales';

export default function cardScaleController() {
    const showModalScale = computed({
        get: () => scaleStore.showModal,
        set: (value) => (scaleStore.showModal = value),
    });
    const scale = computed(() =>
        (scaleStore.scaleList as any).find((item) => {
            return scaleStore.scaleId == item.value;
        }) || { label: null, value: 0 }
    );
    const scaleList = computed(() => scaleStore.scaleList);
    const loading = computed(() => scaleStore.loadingPrint);
    const measure = computed(() => scaleStore.measure);
    const titleStatus = computed(() => scaleStore.measure.status ? 'Online' : 'Offline')
    async function sendPrint() {
        scaleStore.showModalPrint = true;
        scaleStore.loadingModalPrint = true;
        await postScalePrint();
        scaleStore.loadingModalPrint = false;
    }
    return {
        showModalScale,
        scale,
        measure,
        sendPrint,
        loading,
        titleStatus,
        scaleList
    };
}
