<template>
  <MmxTable ref="table" v-bind="{url, fields, headerActions, tableActions, filters, rowClass}">
    <template #cell(prefix)="{value}">
      <i v-if="value" class="icon icon-check"></i>
      <i v-else class="icon icon-times"></i>
    </template>
    <template #cell(context_keys)="{value}">
      {{ value.join(', ') }}
    </template>
    <RouterView />
    <BModal v-model="modalVisible" teleport-disabled hide-footer hide-header no-close-onbackdrop>
      <div class="text-center my-5">
        <BSpinner />
        <div v-if="total" class="mt-5">Indexed {{ indexed }} from {{ total }}</div>
      </div>
    </BModal>
  </MmxTable>
</template>

<script setup lang="ts">
const url = 'mgr/indexes'
const table = ref()
const headerActions = computed(() => {
  return [{route: {name: 'index-create'}, icon: 'plus', title: $t('models.index.title_one')}]
})
const fields = computed(() => {
  return [
    {key: 'id', label: $t('models.index.id'), sortable: true},
    {key: 'title', label: $t('models.index.title'), sortable: true},
    {key: 'prefix', label: $t('models.index.prefix'), sortable: true},
    {key: 'fuzzy', label: $t('models.index.fuzzy'), sortable: true},
    {key: 'context_keys', label: $t('models.index.context_keys')},
    // {key: 'created_at', label: $t('models.index.created_at'), sortable: true, formatter: formatDate},
    // {key: 'updated_at', label: $t('models.index.updated_at'), sortable: true, formatter: formatDate},
  ]
})
const tableActions = computed(() => {
  return [
    {function: reIndex, icon: 'sync', title: $t('actions.update')},
    {route: {name: 'index-id-view'}, icon: 'eye', title: $t('actions.view')},
    {route: {name: 'index-id-edit'}, icon: 'edit', title: $t('actions.edit')},
    {function: table.value?.delete, icon: 'times', title: $t('actions.delete'), variant: 'danger'},
  ]
})
const filters = ref({query: ''})
const modalVisible = ref(false)
const total = ref(0)
const indexed = ref(0)

function rowClass(item: any) {
  return item && !item.active ? 'inactive' : ''
}

async function reIndex(row: any, offset: number = 0) {
  try {
    modalVisible.value = true
    const data = await usePost('mgr/indexes/' + row.id, {offset})
    total.value = data.total
    indexed.value += data.indexed
    if (data.total > indexed.value) {
      await reIndex(row, indexed.value)
    }
    table.value.refresh()
    total.value = 0
    indexed.value = 0
  } catch (e) {
    total.value = 0
    indexed.value = 0
  } finally {
    modalVisible.value = false
  }
}
</script>
