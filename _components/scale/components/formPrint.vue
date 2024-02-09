<template>
<div>
  <master-modal
      v-model="showModal"
      title="Post to Cargo Spot"
      :persistent="true"
      :actions="actions"
      :loading="loading"
      @hide="clear"
    >
    <div>
        <q-form ref="refFormScale">
            <div v-for="(field, keyField) in formFields" :key="keyField">
                <dynamic-field 
                 v-model="formPrint[keyField]" 
                 :field="field"
                 @enter="search(field)"
                />
            </div>
        </q-form>
        <div class="tw-w-full tw-flex tw-justify-center">
            <div 
            class="
            tw-w-32
            tw-rounded-md
            tw-text-center 
            tw-py-4 
            tw-bg-gray-200"
            >
            {{ formPrint.weight }} {{ formPrint.uom }}
            </div>
        </div>
    </div>
  </master-modal>
  <tableFlight 
    @cancel="dialog = $event"
    :dialog="dialog"
    :dataTable="dataTable"
    @flightSelect="setDataTable($event)"
    @validateBound="addManually"
  />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import formPrintController from '../controllers/formPrint'
import tableFlight from "../../../../qramp/_components/modal/tableFlight.vue";

export default defineComponent({
  components:{tableFlight},
  setup() {
    return { ...formPrintController()};
  },
});
</script>

<style scoped></style>
