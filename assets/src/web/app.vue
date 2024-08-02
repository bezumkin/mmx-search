<template>
  <div>
    <SearchComponent ref="search" />
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import SearchComponent from './components/search.vue'
const search = ref()

function run(index: string) {
  search.value.showSearch(index)
}
// @ts-ignore
window.mmxSearch.run = run
</script>
