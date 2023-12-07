<script setup>
defineProps({
  activePage: {
    type: String
  }
})
</script>

<template>
  <a :href="`#${activePage}`">
    <img src="@/assets/img/logo.png" alt="Logo" class="h-9" />
  </a>
</template>

<style lang="scss" scoped></style>
