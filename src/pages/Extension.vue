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
import { useRoute } from 'vue-router';

import CardExtension from '@/components/CardExtension.vue';
import Service, { Extension } from '@/service';

const route = useRoute();

const author = route.params.user as string;
const id = route.params.extension as string;
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

@media (max-width: 768px) {
  .page {
    margin-top: 32px;
  }
}

.card {
  margin: 0 auto;
}
</style>
