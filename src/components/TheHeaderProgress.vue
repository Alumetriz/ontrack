<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid/index.js'

defineProps({
  activePage: {
    type: String
  }
})
</script>

<template>
  <a :href="`#${activePage}`" class="text-sm">
    <div class="flex items-center gap-1">
      Day complete!
      <CheckCircleIcon class="h-9 text-green-500" />
    </div>

    <div class="flex items-center gap-1">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>

<style lang="scss" scoped></style>
