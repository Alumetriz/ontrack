<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <header class="sticky top-0 flex items-center justify-between border-b bg-white p-3">
    <a href="#">
      <img src="@/assets/img/logo.png" alt="Logo" class="h-9" />
    </a>

    <a href="#" class="text-sm">
      <div class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-9 text-green-500" />
      </div>

      <div class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </a>
  </header>
</template>

<style scoped></style>
