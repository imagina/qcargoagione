<template>
  <master-modal
    v-model="showModal"
    title="Scale"
    :persistent="true"
    :loading="loading"
    :actions="actions"
    hideCloseAction
    :maximized="$q.screen.lt.md"
  >
    <q-form ref="refModalScale">
      <dynamic-field :field="fields.scaleId" v-model="scaleId" />
    </q-form>
  </master-modal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import modalScale from '../controllers/modalScale'

export default defineComponent({
  setup() {
    return {...modalScale()};
  },
});
</script>
<style scoped></style>
