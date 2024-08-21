<template>
  <BModal v-model="modalVisible" hide-footer hide-header teleport-to="#mmx-search-modal" size="lg" @shown="onShown">
    <template #default="{close}">
      <div class="search-form" @keydown="onKeydown">
        <div class="search-actions prepend">
          <label :title="$t('search.title')" for="search-input">
            <i class="search-icon magnifying-glass"></i>
          </label>
          <BButton :variant="null" :title="$t('search.close')" class="p-0" @click="close">
            <i class="search-icon arrow-down rotate-90"></i>
          </BButton>
        </div>
        <BFormInput
          ref="input"
          v-model="query"
          :placeholder="$t('search.title')"
          class="search-input"
          autofocus
          @input="onSearch"
        />
        <div class="search-actions append">
          <BButton :title="$t('search.reset')" :disabled="!canReset" @click="onReset">
            <i class="search-icon xmark"></i>
          </BButton>
        </div>
      </div>

      <Transition name="fade">
        <div v-if="results.length" class="search-results" role="listbox">
          <BLink
            v-for="(item, idx) in results"
            :key="idx"
            :href="item.uri"
            :class="{selected: selected === idx}"
            role="option"
            :aria-selected="String(selected === idx)"
            @mouseenter="selected = idx"
          >
            <template v-if="item.parent">
              <div class="small">{{ item.parent.menutitle || item.parent.pagetitle }} /</div>
            </template>
            {{ item.menutitle || item.pagetitle }}
          </BLink>
        </div>
      </Transition>

      <div class="search-shortcuts">
        <span>
          <kbd aria-label="up"><i class="search-icon arrow-down"></i></kbd>
          <kbd aria-label="down"><i class="search-icon arrow-up"></i></kbd>
          {{ $t('search.to_navigate') }}
        </span>
        <span>
          <kbd aria-label="enter"><i class="search-icon arrow-turn-down rotate-90"></i></kbd>
          {{ $t('search.to_select') }}
        </span>
        <span>
          <kbd aria-label="escape">esc</kbd>
          {{ $t('search.to_close') }}
        </span>
      </div>
    </template>
  </BModal>
</template>

<script setup lang="ts">
import MiniSearch from 'minisearch'

type SearchResource = {
  id: number
  pagetitle: string
  menutitle: string
  uri: string
  parent: null | SearchResource
  [key: string]: any
}

type SearchIndex = {
  title: string
  fields: Record<string, any>[]
  fuzzy: number
  boost: Record<string, number>
  prefix: boolean
  pages: SearchResource[]
  timestamp: number
}

const cacheTime = 60 * 10 // 10 minutes
const $t = useLexicon

const miniSearch = ref()
const modalVisible = ref(false)
const input = ref()
const query = ref('')
const results = ref<SearchResource[]>([])
const selected = ref(-1)
const index = ref<SearchIndex>({
  title: '',
  fields: [],
  fuzzy: 0,
  boost: {},
  prefix: true,
  pages: [],
  timestamp: 0,
})
const canReset = computed(() => query.value.length > 0)

function onSearch() {
  selected.value = -1
  if (!query.value.length || !miniSearch.value) {
    results.value = []
  } else {
    results.value = miniSearch.value.search(query.value)
  }
}

function onReset() {
  query.value = ''
  results.value = []
  selected.value = -1
  if (input.value) {
    input.value.$el.focus()
  }
}

function showSearch(index: string) {
  if (!modalVisible.value) {
    initSearch(index)
  }
  modalVisible.value = !modalVisible.value
}

async function initSearch(name: string) {
  const index = await getIndex(name)
  const fields: string[] = []
  const boost: Record<string, number> = {}
  index.fields.forEach((row) => {
    fields.push(row.field)
    boost[row.field] = Number(row.weight)
  })

  miniSearch.value = new MiniSearch({
    fields,
    storeFields: ['id', 'pagetitle', 'menutitle', 'uri', 'parent'],
    searchOptions: {
      boost,
      fuzzy: index.fuzzy,
      prefix: index.prefix,
    },
  })

  if (index.pages) {
    miniSearch.value.addAll(index.pages)
  }
}

async function getIndex(title: string) {
  const timestamp = new Date().getTime() / 1000
  if (index.value.title !== title || index.value.timestamp + cacheTime < timestamp) {
    index.value.title = title
    index.value.timestamp = timestamp

    const pages: Record<number, SearchResource> = {}
    try {
      const data = await useGet('web/index', {title})
      data.pages.forEach((page: any) => {
        if (!pages[page.resource_id]) {
          pages[page.resource_id] = page.resource
          pages[page.resource_id].parent = page.parent
        }
        pages[page.resource_id][page.field] = page.value
      })

      index.value.fields = data.fields
      index.value.pages = Object.values(pages)
      index.value.fuzzy = data.fuzzy
      index.value.prefix = data.prefix
    } catch (e) {}
  }

  return index.value
}

function onKeydown(e: KeyboardEvent) {
  const key = e.key
  if (key === 'ArrowDown') {
    e.preventDefault()
    selected.value++
    if (selected.value >= results.value.length) {
      selected.value = 0
    }
    scrollToSelected()
  } else if (key === 'ArrowUp') {
    e.preventDefault()
    selected.value--
    if (selected.value < 0) {
      selected.value = results.value.length - 1
    }
    scrollToSelected()
  } else if (key === 'Enter') {
    e.preventDefault()
    if (selected.value > -1) {
      const page = results.value[selected.value]
      if (page) {
        document.location = page.uri
      }
    }
  }
}

function scrollToSelected() {
  setTimeout(() => {
    const selectedEl = document.querySelector('.search-results > .selected')
    if (selectedEl) {
      selectedEl.scrollIntoView({block: 'nearest'})
    }
  }, 100)
}

function onShown() {
  input.value.$el.focus()
}

watch(
  () => results.value,
  (newValue: SearchResource[]) => {
    newValue.forEach((item) => {
      console.info({...item})
    })
  },
)

defineExpose({showSearch})
</script>
