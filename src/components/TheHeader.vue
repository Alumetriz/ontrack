<script setup>
const emit = defineEmits(['go-to-timeline', 'go-to-progress'])
defineProps({
  activePage: {
    type: String
  }
})
</script>

<template>
  <header class="sticky top-0 flex items-center justify-between border-b bg-white p-3">
    <the-logo :active-page="activePage" @click="emit('go-to-timeline')"></the-logo>

    <the-header-progress :active-page="activePage" @click="emit('go-to-progress')"></the-header-progress>
  </header>
</template>

<style lang="scss" scoped></style>
