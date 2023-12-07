<script setup>
import { PAGE__ACTIVITIES, PAGE__PROGRESS, PAGE__TIMELINE } from '@/constans.js'
import { ref } from 'vue'

const normalizePageHash = () => {
  const hash = window.location.hash.slice(1)

  if ([PAGE__ACTIVITIES, PAGE__PROGRESS, PAGE__TIMELINE].includes(hash)) {
    return hash
  }

  window.location.hash = PAGE__TIMELINE
  return PAGE__TIMELINE
}

const activePage = ref(normalizePageHash())

const goTo = (page) => {
  activePage.value = page
}
</script>

<template>
  <the-header
    :active-page="activePage"
    @go-to-timeline="goTo(PAGE__TIMELINE)"
    @go-to-progress="goTo(PAGE__PROGRESS)"
  ></the-header>

  <main class="flex grow flex-col">
    <the-timeline v-show="activePage === PAGE__TIMELINE"></the-timeline>
    <the-activities v-show="activePage === PAGE__ACTIVITIES"></the-activities>
    <the-progress v-show="activePage === PAGE__PROGRESS"></the-progress>
  </main>

  <the-navigation :active-page="activePage" @navigate="goTo($event)"></the-navigation>
</template>

<style scoped></style>
