<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ label }} ↗
  </a>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
a {
  color: var(--text-primary);
  text-decoration: none;
}
</style>
