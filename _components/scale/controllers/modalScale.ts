import { ref, computed, ComputedRef, getCurrentInstance } from 'vue';
import store from '../stores/scale';
import scaleStore from '../stores/scale'
import { getScaleMeasuresList } from '../services/getScales';
import cache from '@imagina/qsite/_plugins/cache';

export default function useModalStation() {
    const proxy = getCurrentInstance().appContext.config.globalProperties
    const refModalScale: any = ref(null);
    const fields = computed(() => {
        return {
            scaleId: {
                value: null,
                type: "select",
                props: {
                    label: "Scale",
                    rules: [
                        (val) => !!val || proxy.$tr("isite.cms.message.fieldRequired"),
                    ],
                    clearable: true,
                    options: scaleStore.scaleList,
                },
            },
        }
    });
    const loading: ComputedRef<boolean> = computed(() => store.loading);

    const showModal = computed({
        get: () => store.showModal,
        set: (value) => (store.showModal = value),
    });

    const scaleId = computed({
        get: () => store.scaleId,
        set: (value) => (store.scaleId = value),
    });

    const actions = computed(() => {
        return [
            {
                props: {
                    color: "primary",
                    label: "save",
                },
                action: async () => {
                    saveScale();
                },
            },
        ];
    })

    async function saveScale() {
        refModalScale.value.validate().then(async (success) => {
            if (success) {
                store.measure.weight = 0
                store.clearIntervalFuntion();
                store.showModal = false;
                await store.setInt();
                await getScaleMeasuresList();
                await cache.set("scaleId", store.scaleId);
            }
        })
    }

    return {
        loading,
        showModal,
        scaleId,
        actions,
        fields,
        refModalScale
    };
}
