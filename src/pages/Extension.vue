<template>
  <div class="page">
    <CardExtension
      v-if="extension"
      class="card"
      :extension="extension"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import CardExtension from '@/components/CardExtension.vue';
import Service, { Extension } from '@/service';

const author = 'thomas';
const id = 'spotify-controls';
const extension = ref<Extension | null>(null);

onMounted(() => {
  async function fetchExtension() {
    extension.value = await Service.getExtension(author, id);
  }

  fetchExtension();
});
</script>

<style scoped>
.page {
  margin-top: 96px;
}

.card {
  margin: 0 auto;
}
</style>
