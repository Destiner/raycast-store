<template>
  <div class="page">
    <CardExtension
      class="card"
      :extension="extension"
    />
  </div>
</template>

<script setup lang="ts">
import CardExtension from '@/components/CardExtension.vue';

const extension = {};
</script>

<style scoped>
.page {
  margin-top: 96px;
}

.card {
  margin: 0 auto;
}
</style>
