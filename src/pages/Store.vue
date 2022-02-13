<template>
  <div class="page">
    <div class="links">
      <RouterLink :to="{ name: 'extension', params: { user: 'thomas', extension: 'spotify-controls' } }">
        Spotify Controls
      </RouterLink>
      <RouterLink :to="{ name: 'extension', params: { user: 'rishabswift', extension: 'word-search' } }">
        Word Search
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.page {
  display: flex;
}

.links {
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  margin-right: auto;
  margin-left: auto;
}

a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

a:hover {
  color: var(--color-text-primary);
}
</style>
