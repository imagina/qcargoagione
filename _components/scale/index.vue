<template>
    <div class="tw-p-4 tw-bg-gray-100 tw-rounded-md tw-min-h-screen">
        <page-actions title="Scale" class="tw-py-4" @refresh="getScaleMeasuresList(true)"/>
        <div class="lg:tw-flex">
            <div class="lg:tw-w-1/2 tw-mb-4">
                <div class="lg:tw-mx-4 tw-py-4">
                    <cardScale />
                </div>
                <div class="lg:tw-px-4 tw-mt-3 tw-hidden">
                    <h1 class="tw-text-lg tw-text-gray-500 tw-font-semibold">
                        Last 7 days
                    </h1>
                    <QCharts :chartsData="chartsData" />
                </div>
            </div>
            <div class="lg:tw-w-1/2">
                <h1 class="tw-text-lg tw-text-gray-500 tw-font-semibold">Last measures</h1>
                <scaleList />
            </div>
        </div>
        <modalScale />
        <formPrint />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cardScale from "./components/cardScale.vue";
import scaleList from "./components/scaleList.vue";
import modalScale from './components/modalScale.vue'
import QCharts from '@imagina/qsite/_components/master/charts.vue';
import mainController from './controllers/main'
import formPrint from './components/formPrint.vue'

export default defineComponent({
    components: {
        cardScale,
        scaleList,
        modalScale,
        QCharts,
        formPrint
    },
    setup() {
        return {...mainController()}
    },
});
</script>

<style scoped></style>
