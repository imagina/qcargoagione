<template>
  <div>
    <div class="tw-flex tw-justify-center tw-rounded-md tw-py-4">
      <div
        class="tw-bg-gradient-to-b tw-ease-linear tw-rounded-full tw-h-72 tw-w-72 tw-p-2"
        :class="{
          'tw-from-red-700 tw-to-red-400': !measure.status,
          'tw-from-blue-700 tw-to-blue-400': measure.status
        }"
      >
        <div
          class="tw-h-full tw-w-full tw-text-center tw-rounded-full tw-py-10 tw-bg-white"
        >
          <div class="tw-font-semibold tw-text-gray-400 tw-mb-8 tw-text-base tw-mt-4">
            Weight
          </div>
          <div class="tw-font-semibold tw-text-gray-500 tw-text-5xl tw-z-0 tw--mr-6">
              {{ measure.weight }} <span class="tw-text-sm tw-text-gray-400">{{ measure.uom || 'kg' }}</span>
          </div>
          <div 
            class="tw-font-semibold tw-mb-8 tw-text-base tw-mt-4"
            :class="{
              'tw-text-green-400': measure.status,
              'tw-text-red-400': !measure.status
            }"
          >
            {{ titleStatus }}
          </div>
        </div>
      </div>
    </div>
    <div class="tw-text-center tw-space-y-2">
      <div>
        <q-btn 
          unelevated 
          rounded 
          color="primary" 
          icon="fa-light fa-print" 
          label="Print" 
          @click="sendPrint"
          :loading="loading"
          :disabled="!measure.status"
        />
      </div>
      <div>
        <q-btn
          v-if="scale.label" 
          unelevated 
          rounded 
          color="primary" 
          icon="fa-thin fa-weight-scale" 
          :label="scale.label"
          @click="scaleList.length > 1 ? showModalScale = true : false" 
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cardScaleController from '../controllers/cardScale'

export default defineComponent({
  setup() {
    return { ...cardScaleController() };
  },
});
</script>

<style scoped></style>
