<template>
  <div>
    <BFormGroup :label="$t('models.index.title')">
      <BFormInput v-model="record.title" required />
    </BFormGroup>

    <BFormGroup :label="$t('models.index.context_key')">
      <MmxInputComboBox
        v-model="record.context_key"
        url="mgr/modx/contexts"
        value-field="key"
        text-field="name"
        force-select
        required
      />
    </BFormGroup>

    <BFormGroup :description="$t('models.index.field_desc')">
      <BRow>
        <BCol cols="6">{{ $t('models.index.field') }}</BCol>
        <BCol cols="6">{{ $t('models.index.weight') }}</BCol>
      </BRow>
      <BRow v-for="(row, idx) in record.fields" :key="idx" class="mt-2">
        <BCol cols="6">
          <BFormInput v-model="row.field" size="sm" disabled />
        </BCol>
        <BCol cols="6" class="d-flex align-items-center">
          <BFormInput v-model="row.weight" type="number" size="sm" min="1" step="1" />
          <BButton size="sm" class="ms-2" @click="onRemove(idx)">
            <i class="icon icon-times fa-fw"></i>
          </BButton>
        </BCol>
      </BRow>
      <BRow class="mt-2 align-items-center">
        <BCol cols="6">
          <BFormInput v-model="field" size="sm" @keydown="onEnter" />
        </BCol>
        <BCol cols="6" class="d-flex align-items-center">
          <BFormInput v-model="weight" type="number" size="sm" min="1" step="1" @keydown="onEnter" />
          <BButton size="sm" class="ms-2" :disabled="!canAdd" @click="onAdd">
            <i class="icon icon-check fa-fw"></i>
          </BButton>
        </BCol>
      </BRow>
    </BFormGroup>

    <BFormGroup class="mt-3" :description="$t('models.index.prefix_desc')">
      <BFormCheckbox v-model="record.prefix">{{ $t('models.index.prefix') }}</BFormCheckbox>
    </BFormGroup>

    <BFormGroup :label="$t('models.index.fuzzy')" :description="$t('models.index.fuzzy_desc')">
      <BFormInput v-model="record.fuzzy" type="number" min="0" step="0.1" />
    </BFormGroup>

    <BFormGroup class="mt-3">
      <BFormCheckbox v-model="record.active">{{ $t('models.index.active') }}</BFormCheckbox>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
const record: any = computed({
  get() {
    return props.modelValue
  },
  set(newValue: number) {
    emit('update:modelValue', newValue)
  },
})

const field = ref('')
const weight = ref('1')
const canAdd = computed(() => {
  return (
    field.value.length && weight.value && record.value.fields.findIndex((row: any) => row.field === field.value) === -1
  )
})

function onAdd() {
  if (canAdd.value) {
    record.value.fields.push({field: field.value, weight: weight.value})
    field.value = ''
    weight.value = '1'
  }
}

function onRemove(idx: number) {
  record.value.fields.splice(idx, 1)
}

function onEnter(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    e.preventDefault()
    onAdd()
  }
}
</script>
