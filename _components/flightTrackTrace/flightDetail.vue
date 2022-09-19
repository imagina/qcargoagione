<template>
  <div>
    <div
      v-if="!loading && awbTrackingList['@num']"
      class="tw-shadow-lg tw-rounded tw-py-4"
    >
      <div
        class="
          tw-py-4
          tw-bg-blue-800
          tw-space-y-2
          tw-rounded
          tw-text-white
          tw-px-8
          tw-font-semibold
        "
      >
        <p>AWB Details</p>
      </div>
      <div>
        <div class="tw-border tw-border-gray-200 tw-p-4 tw-m-4 tw-rounded">
          <div class="tw-grid tw-grid-cols-2 tw-space-y-8">
            <div class="tw-col-span-2">
              <span class="tw-font-semibold"> Air Waybill Number: </span>
              {{ awbTrackingList["@num"] }}
            </div>
            <div>
              <span class="tw-font-semibold"> Origin: </span>
              {{ awbTrackingList.awbOrigin }}
            </div>
            <div>
              <span class="tw-font-semibold"> Pieces: </span>
              {{ awbTrackingList.awbPieces }}
            </div>
            <div>
              <span class="tw-font-semibold"> Destination: </span>
              {{ awbTrackingList.awbDestination }}
            </div>
            <div>
              <span class="tw-font-semibold"> Weight: </span>
              {{ awbTrackingList.awbWeight }}
            </div>
          </div>
        </div>
        <div class="tw-px-4">
          <q-table
            title="Status information"
            :data="awbTrackingList.segments"
            :columns="columns"
            :rows-per-page-options="[10, 20, 30, 40]"
          />
        </div>
      </div>
    </div>
    <div
      v-if="loading"
      class="
        tw-flex 
        tw-justify-center 
        tw-py-24 
        tw-bg-white 
        tw-bg-opacity-75 
        tw-z-20
        tw-shadow-lg 
        tw-rounded
      "
    >
      <q-spinner color="primary" size="5em" />
    </div>
  </div>
</template>

<script>
import qCargoStore from "../../_store/qCargoStore.js";
export default {
  computed: {
    awbTrackingList() {
      return qCargoStore().getAwbTrackingList();
    },
    columns() {
      return [
        {
          name: "origin",
          label: "Origin",
          field: "origin",
          sortable: true,
          align: "left",
        },
        {
          name: "dest",
          label: "Dest",
          field: "dest",
          sortable: true,
          align: "left",
        },
        {
          name: "flightNum",
          label: "flight",
          field: "flightNum",
          sortable: true,
          align: "left",
        },
        {
          name: "status",
          label: "Status",
          field: "status",
          sortable: true,
          align: "left",
        },
        {
          name: "statusCode",
          label: "Code",
          field: "statusCode",
          sortable: true,
          align: "left",
        },
        {
          name: "eventDate",
          label: "Event Date",
          field: "eventDate",
          sortable: true,
          align: "left",
        },
        {
          name: "eventTime",
          label: "Event Time",
          field: "eventTime",
          sortable: true,
          align: "left",
        },
        {
          name: "numPieces",
          label: "Num Pieces",
          field: "numPieces",
          sortable: true,
          align: "left",
        },
        {
          name: "weight",
          label: "weight",
          field: "weight",
          sortable: true,
          align: "left",
        },
      ];
    },
    loading() {
      return qCargoStore().getLoading();
    },
  },
};
</script>