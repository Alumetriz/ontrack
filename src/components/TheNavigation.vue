<script setup>
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { PAGE__ACTIVITIES, PAGE__PROGRESS, PAGE__TIMELINE } from '@/constans.js'

defineProps({
  activePage: {
    type: String
  }
})

const emit = defineEmits(['navigate'])

const navItems = {
  [PAGE__TIMELINE]: ClockIcon,
  [PAGE__ACTIVITIES]: ListBulletIcon,
  [PAGE__PROGRESS]: ChartBarIcon
}
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center border-t justify-around">
      <nav-item
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-400 pointer-events-none': activePage === page }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </nav-item>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
