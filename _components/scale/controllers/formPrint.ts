
import Vue, { computed, onBeforeUnmount, ref } from "vue";
import scaleStore from '../stores/scale'
import { getScaleMeasuresList, getFlightaware } from "../services/getScales";
import { postMeasures } from "../services/postScales";
export default function formPrintController() {
    const refFormScale: any = ref(null);
    const formPrint = computed(() => scaleStore.formPrint);
    const showModal = computed({
        get: () => scaleStore.showModalPrint,
        set: (value: boolean) => {
            scaleStore.showModalPrint = value;
        }
    });
    const dialog = computed({
        get: () => scaleStore.modalTable,
        set: (value: boolean) => {
            scaleStore.modalTable = value;
        }
    });
    const loading = computed(() => scaleStore.loadingModalPrint);
    const dataTable = computed(() =>  scaleStore.dataTable);
    const formFields = computed(() => ({
        flightNumber: {
            value: null,
            type: "search",
            props: {
                rules: [
                    (val) => !!val || Vue.prototype.$tr("isite.cms.message.fieldRequired"),
                ],
                loading: scaleStore.loadingSearch,
                label: `${Vue.prototype.$tr("ifly.cms.form.flight")}`,
                clearable: true,
                maxlength: 10,
                color: "primary",
            },
            label: Vue.prototype.$tr("ifly.cms.form.flight"),
        },
        date: {
            value: null,
            type: 'date',
            props: {
                rules: [
                    val => !!val || Vue.prototype.$tr('isite.cms.message.fieldRequired')
                ],
                hint: 'Format: YYYY-MM-DD',
                mask: 'YYYY-MM-DD',
                'place-holder': 'YYYY-MM-DD',
                label: `Date`,
                clearable: true,
                color: "primary",
                format24h: true,
            },
            label: Vue.prototype.$tr('isite.cms.label.date'),
        },
        destinationAirportId: {
            value: null,
            type: 'crud',
            props: {
              crudType: 'select',
              //@ts-ignore
              crudData: import('src/modules/qfly/_crud/airport'),
              crudProps: {
                label: 'Destination Airport',
                rules: [
                    (val) => !!val || Vue.prototype.$tr("isite.cms.message.fieldRequired"),
                ],
              },
              config: {options: {label: 'fullName', value: 'id'}},
            },
        },
        uldNumber: {
            value: null,
            type: "input",
            props: {
                rules: [
                    (val) => !!val || Vue.prototype.$tr("isite.cms.message.fieldRequired"),
                ],
                label: 'ULD Number',
                clearable: true,
                maxlength: 10,
                color: "primary",
            },
            label: 'ULD Number',
        },
    }))
    const actions = computed(() => ([
        {
            props: {
                color: 'primary',
                label: 'Discard',
            },
            action: async () => {
                await getScaleMeasuresList();
                clear();
            }
        },
        {
            props: {
                color: "primary",
                label: 'Submit',
            },
            action: async () => {
                await save();
            }
        },
    ]));
    async function save(): Promise<void> {
        scaleStore.loadingModalPrint = true;
        const validate = await refFormScale.value.validate();
        if(validate) {
            await postMeasures();
            await getScaleMeasuresList();
            clear();
        }
        scaleStore.loadingModalPrint = false;
    }
    function clear(): void {
        showModal.value = false;
    }
    onBeforeUnmount(() => {
        showModal.value = false;
    })
    function setDataTable({select, dialog}) {
        scaleStore.modalTable = dialog;
        formPrint.value.destinationAirportId = select.destinationAirportId;
    }
    function addManually() {
        formPrint.value.destinationAirportId = null;
        scaleStore.modalTable = false;
        scaleStore.showModal = true;
    }
    async function search({type}) {
        if(type == "search") {
            scaleStore.loadingSearch = true;
            await getFlightaware();
            scaleStore.loadingSearch = false;
        }
    }
    return { 
        formPrint, 
        formFields, 
        showModal, 
        loading,
        actions,
        clear,
        refFormScale,
        setDataTable,
        addManually,
        dialog,
        search,
        dataTable, 
    };
}