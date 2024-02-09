
import { computed } from "vue";
import scaleStore from '../stores/scale'

export default function scaleListController() {
    const scaleMeasuresList = computed(() => scaleStore.scaleMeasuresList)
    const loading = computed(() => scaleStore.loadingMeasuresList)
    return { scaleMeasuresList, loading };
}