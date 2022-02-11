<template>
  <a :href="url">Install</a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  extension: {
    type: String,
    required: true,
  },
});

const url = computed(() => {
  return `raycast://extensions/${props.author}/${props.extension}?source=webstore`;
});
</script>

<style scoped>
a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 6px;
  background: var(--color-bg-button);
  color: var(--color-text);
  font-size: 15px;
  text-decoration: none;
}

a:hover {
  background: var(--color-bg-button-hover);
}
</style>
