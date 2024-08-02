<template>
  <MmxModal v-model="record" v-bind="properties">
    <MmxTable v-bind="{url, fields, filters, sort, dir}">
      <template #header-start>
        <BFormSelect v-if="options.length" v-model="filters.field" :options="options" />
      </template>
      <template #cell(resource)="{value}"> {{ value.id }}.&nbsp;{{ value.pagetitle }} </template>
    </MmxTable>
  </MmxModal>
</template>

<script setup lang="ts">
const record = ref({})

const properties = {
  url: 'mgr/indexes/' + useRoute().params.id,
  title: $t('models.index.title_one'),
  updateKey: 'mgr-indexes',
  size: 'lg',
}

try {
  record.value = await useGet(properties.url)
} catch (e) {
  console.error(e)
  useError()
}

const url = properties.url + '/resources'
const fields = [
  {key: 'resource', label: $t('models.index_resource.resource'), sortable: true},
  {key: 'field', label: $t('models.index_resource.field'), sortable: true},
  {key: 'value', label: $t('models.index_resource.value')},
]
const filters = ref({
  query: '',
  field: null,
})
const sort = ref('resource')
const dir = ref('desc')

const options = computed(() => {
  const tmp = []
  if ('fields' in record.value && Array.isArray(record.value.fields)) {
    record.value.fields.forEach((row: any) => {
      tmp.push({text: row.field, value: row.field})
    })
  }
  if (tmp.length) {
    tmp.unshift({text: $t('models.index_resource.title_one'), value: null})
  }
  return tmp
})
</script>
