<template>
  <div class="bar">
    <RouterLink
      class="brand"
      :to="{ name: 'home' }"
    >
      <IconBrandFull />
    </RouterLink>
    <div class="items">
      <ul class="routes">
        <li
          v-for="route in routes"
          :key="route.name"
          class="route"
          :class="{ active: route.name === activeRoute }"
        >
          <RouterLink :to="{ name: route.name }">
            {{ route.title }}
          </RouterLink>
        </li>
      </ul>
      <div class="user">
        <Avatar
          class="avatar"
          :src="avatarSrc"
        />
        <IconChevronDown class="icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import Avatar from '@/components/Avatar.vue';
import IconBrandFull from '@/components/icons/IconBrandFull.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';

const avatarSrc = '/assets/users/thomas.jpeg';

const routes = [{
  title: 'Store',
  name: 'store',
  active: true,
}, {
  title: 'Developer',
  name: 'developers',
  active: false,
}, {
  title: 'Pricing',
  name: 'pricing',
  active: false,
}, {
  title: 'Changelog',
  name: 'changelog',
  active: false,
}, {
  title: 'Blog',
  name: 'blog',
  active: false,
}, {
  title: 'Jobs',
  name: 'jobs',
  active: false,
}];

const activeRoute = computed(() => {
  const route = useRoute();

  const { name } = route;

  if (name === 'extension' || name === 'user') {
    return 'store';
  }
  return name;
});
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1064px;
  margin: 0 auto;
}

.brand {
  margin-left: 32px;
  padding: 24px 0;
}

.items {
  display: flex;
}

@media (max-width: 768px) {
  .items {
    display: none;
  }
}

.routes {
  display: flex;
  gap: 32px;
  align-items: center;
  font-weight: 500;
  letter-spacing: 0.025em;
}

.route {
  font-size: 12.8px;
  list-style: none;
}

.route > a {
  color: var(--color-text-secondary);
  text-decoration: none;
}

.route.active > a {
  color: var(--color-text);
}

.route > a:hover {
  color: var(--color-text);
}

.routes::after {
  content: '|';
  margin-top: 2px;
  color: var(--color-text-label);
  font-size: 13px;
}

.user {
  display: flex;
  gap: 9px;
  align-items: center;
  margin: 0 32px;
}

.avatar {
  width: 21px;
  height: 21px;
}

.icon {
  width: 10px;
  height: 10px;
  color: #c2c7ca;
}
</style>
