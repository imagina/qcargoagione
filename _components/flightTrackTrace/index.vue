<template>
    <div class="tw-p-4">
    <div
        class="
        tw-px-8
        tw-border
        tw-py-4
        tw-rounded
        tw-space-y-4
        tw-mx-auto
        tw-my-4
        tw-shadow-lg"
    >
        <p class="tw-font-semibold">AIR WAYBILL TRACK AND TRACE</p>
        <div class="tw-flex tw-w-full tw-space-x-4">
          <div class="tw-w-64">
            <dynamic-field 
              :field="airWaybillNumber" 
              v-model="airWaybillNumber.value" 
              @enter="getAwbTracking"
              />
          </div>
        </div>
    </div>
    <div>
      <flightDetail />
    </div>
</div>
</template>

<script>
import flightDetail from './flightDetail.vue';
import qCargoStore from '../../_store/qCargoStore.js';
export default {
  components: {
    flightDetail,
  },  
  data() {
    return {
      airWaybillNumber: {
        value: null,
        type: "search",
        props: {
          mask:'###-#########',
          label: "Air Waybill Number",
          maxlength: 12,
        },
      },
    };
  },
  methods: {
    async getAwbTracking() {
      if(!this.airWaybillNumber.value || this.airWaybillNumber.value === '') {
        qCargoStore().resetAwbTrackingList();
        return;
      } 
      await qCargoStore().getAwbTracking(this.airWaybillNumber.value);
    }
  }
};
</script>