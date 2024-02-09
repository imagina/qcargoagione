import Vue, {reactive, computed} from 'vue';
import {getMeasure} from '../services/getScales'
import moment from 'moment';

interface State {
    showModal: boolean;
    titleModal: string;
    loading: boolean;
    measure: Measure;
    scaleId: number | null,
    scaleList: any[],
    scaleMeasuresList: any[],
    interval: any,
    loadingMeasuresList: boolean;
    loadingPrint: boolean;
    measureId: number | null;
    formPrint: Measure;
    showModalPrint: boolean;
    loadingModalPrint: boolean;
    dataTable: any[];
    modalTable: boolean;
    loadingSearch: boolean;
}

interface Measure {
    tare: string | null;
    weight: number;
    uom: string;
    scaleId?: number | null;
    flightNumber?: string | null
    date?: string | null;
    uldNumber?: string | null;
    status?: boolean;
    destinationAirportId?: number | null;
}

const state = reactive<State>({
    showModal: false,
    titleModal: '',
    loading: false,
    scaleId: null,
    measure: {
        tare: null,
        weight: 0,
        uom: "Kg",
        scaleId: null,
        status: false,
    },
    scaleList: [],
    scaleMeasuresList: [],
    interval: null,
    loadingMeasuresList: false,
    loadingPrint: false,
    measureId: null,
    formPrint: {
        tare: null,
        weight: 0,
        uom: "Kg",
        scaleId: null,
        flightNumber: null,
        date: moment().format('YYYY-MM-DD'),
        uldNumber: null,
        destinationAirportId: null,
    },
    showModalPrint: false,
    loadingModalPrint: false,
    dataTable: [],
    modalTable: false,
    loadingSearch: false,
})


const store = computed(() => ({
    get showModal(): boolean {
        return state.showModal;
    },
    set showModal(value: boolean) {
        state.showModal = value;
    },
    get titleModal(): string {
        return state.titleModal;
    },
    set titleModal(value: string) {
        state.titleModal = value;
    },
    get loading(): boolean {
        return state.loading;
    },
    set loading(value: boolean) {
        state.loading = value;
    },
    get scaleId(): number | null {
        return state.scaleId;
    },
    set scaleId(value: number | null) {
        state.scaleId = value;
    },
    get measure(): any {
        return state.measure;
    },
    set measure(value: any) {
        state.measure = value;
    },
    get scaleList(): any[] {
        return state.scaleList;
    },
    set scaleList(value: any[]) {
        state.scaleList = value;
    },
    get scaleMeasuresList(): any[] {
        return state.scaleMeasuresList;
    },
    set scaleMeasuresList(value: any[]) {
        state.scaleMeasuresList = value;
    },
    get interval(): any {
        return state.interval;
    },
    set interval(value: any) {
        state.interval = value;
    },
    get loadingMeasuresList(): boolean {
        return state.loadingMeasuresList;
    },
    set loadingMeasuresList(value: boolean) {
        state.loadingMeasuresList = value;
    },
    get loadingPrint(): boolean {
        return state.loadingPrint;
    },
    set loadingPrint(value: boolean) {
        state.loadingPrint = value;
    },
    get measureId(): number | null {
        return state.measureId;
    },
    set measureId(value: number | null) {
        state.measureId = value;
    },
    get formPrint(): Measure {
        return state.formPrint;
    },
    set formPrint(value: Measure) {
        state.formPrint = value;
    },
    get showModalPrint(): boolean {
        return state.showModalPrint;
    },
    set showModalPrint(value: boolean) {
        state.showModalPrint = value;
    },
    get loadingModalPrint(): boolean {
        return state.loadingModalPrint;
    },
    set loadingModalPrint(value: boolean) {
        state.loadingModalPrint = value;
    },
    get dataTable(): any[] {
        return state.dataTable;
    },
    set dataTable(value: any[]) {
        state.dataTable = value;
    },
    get modalTable(): boolean {
        return state.modalTable;
    },
    set modalTable(value: boolean) {
        state.modalTable = value;
    },
    get loadingSearch(): boolean {
        return state.loadingSearch;
    },
    set loadingSearch(value: boolean) {
        state.loadingSearch = value;
    },
    setInt() {
        state.interval = setInterval(async () => {
            await getMeasure();
        }, 3000);
    },
    clearIntervalFuntion() {
        clearInterval(state.interval);
        state.interval = null;
    },
    reset(): void {
        state.scaleId = null;
        state.showModal = false;
        state.showModalPrint = false;
    },
})).value


export default store;