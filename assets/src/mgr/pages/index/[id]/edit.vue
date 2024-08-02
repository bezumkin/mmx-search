<template>
  <MmxModal v-model="record" v-bind="properties">
    <template #form-fields>
      <FormIndex v-model="record" />
    </template>
  </MmxModal>
</template>

<script setup lang="ts">
import FormIndex from '../../../../mgr/components/forms/index.vue'

const record = ref({})

const properties = {
  url: 'mgr/indexes/' + useRoute().params.id,
  title: $t('models.index.title_one'),
  updateKey: 'mgr-indexes',
  method: 'patch',
}

try {
  record.value = await useGet(properties.url)
} catch (e) {
  console.error(e)
  useError()
}
</script>
