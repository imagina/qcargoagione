<template>
  <div class="scale-list-ctn tw-max-h-screen tw-overflow-scroll">
    <div v-for="(item, index) in scaleMeasuresList" :key="index">
      <div
        class="
         tw-flex 
         tw-text-base 
         tw-space-x-8 
         tw-border 
         tw-border-gray-200 
         tw-my-2 
         tw-p-4 
         tw-shadow-md 
         tw-rounded-md 
         tw-bg-white 
         text-label"
      > 
        <div class="tw-flex tw-space-x-3 tw-w-1/2">
           <div class="tw-pt-1 lg:tw-pt-0 tw-text-xl lg:tw-text-2xl">
              <i class="tw-text-gray-400 fa-thin fa-weight-scale"></i>
            </div>
            <div>
                <div class="tw-text-gray-400 tw-text-xs tw-font-semibold tw-mb-0.5">Weight</div>
                <div class="tw-font-bold tw-text-xs lg:tw-text-sm">{{ item.weight || 0 }} kg</div>
            </div> 
        </div>
        <div class="tw-flex tw-space-x-3 tw-w-1/2">
           <div class="tw-pt-1 lg:tw-pt-0 tw-text-xl lg:tw-text-2xl">
            <i class="tw-text-gray-400 fa-thin fa-calendar"></i>
           </div>
           <div>
                <div class="tw-text-gray-400 tw-text-xs tw-font-semibold tw-mb-0.5">Date</div>
                <div class="tw-font-bold tw-text-xs lg:tw-text-sm">{{ $moment(item.createdAt).format('YYYY-MM-DD HH:MM') }}</div>
            </div> 
        </div>
      </div>
    </div>
    <div v-if="scaleMeasuresList.length === 0" class="text-center tw-py-8 tw-text-2xl">
      No Data
    </div>
    <inner-loading :visible="loading"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import scaleListController from '../controllers/scaleList'

export default defineComponent({
  setup() {
    return {...scaleListController()};
  },
});
</script>

<style>
.scale-list-ctn .text-label {
    @apply tw-text-xs lg:tw-text-base;
    color: #1F294F;
    leading-trim: both;
    text-edge: cap;
    font-family: Manrope;
    font-style: normal;
    letter-spacing: 0.36px;
}
</style>
