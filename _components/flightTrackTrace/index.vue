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
        <p class="tw-text-center tw-font-semibold">AIR WAYBILL TRACK AND TRACE</p>
        <dynamic-field :field="airWaybillNumber" v-model="airWaybillNumber.value" />
        <q-btn color="primary" label="Save" @click="getAwbTracking" />
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
        type: "input",
        props: {
          label: "Air Waybill Number",
          maxlength: 12,
        },
      },
    };
  },
  methods: {
    async getAwbTracking() {
      if(!this.airWaybillNumber.value || this.airWaybillNumber.value === '') return; 
      await qCargoStore().getAwbTracking(this.airWaybillNumber.value);
    }
  }
};
</script>