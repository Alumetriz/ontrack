<script setup>
defineOptions({
  inheritAttrs: false
})

const emit = defineEmits(['click'])
</script>

<template>
  <li class="flex-1">
    <a
      class="flex cursor-pointer flex-col items-center p-2 text-xs capitalize"
      :href="$attrs.href"
      :class="$attrs.class"
      @click="emit('click')"
    >
      <slot></slot>
    </a>
  </li>
</template>

<style lang="scss" scoped></style>
