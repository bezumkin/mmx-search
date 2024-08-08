<template>
  <MmxModal v-model="record" v-bind="properties">
    <template #form-fields>
      <FormIndex v-model="record" />
    </template>
  </MmxModal>
</template>

<script setup lang="ts">
import FormIndex from '../../../mgr/components/forms/index.vue'

const record = ref({
  title: '',
  fields: [],
  prefix: true,
  fuzzy: 0.2,
  context_keys: [],
  active: true,
})

const properties = {
  url: 'mgr/indexes',
  title: $t('models.index.title_one'),
  method: 'put',
}
</script>
