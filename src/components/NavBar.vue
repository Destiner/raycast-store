<template>
  <div class="bar">
    <a
      class="brand"
      href="/"
    >
      <IconBrandFull />
    </a>
    <div class="items">
      <ul class="routes">
        <li
          v-for="route in routes"
          :key="route.path"
          class="route"
          :class="{ active: route.active }"
        >
          <a :href="route.path">
            {{ route.name }}
          </a>
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
import Avatar from '@/components/Avatar.vue';
import IconBrandFull from '@/components/icons/IconBrandFull.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';

const avatarSrc = '/assets/users/destiner.jpeg';

const routes = [{
  name: 'Store',
  path: '/store',
  active: true,
}, {
  name: 'Developer',
  path: '/developers',
  active: false,
}, {
  name: 'Pricing',
  path: '/pricing',
  active: false,
}, {
  name: 'Changelog',
  path: '/changelog',
  active: false,
}, {
  name: 'Blog',
  path: '/blog',
  active: false,
}, {
  name: 'Jobs',
  path: '/jobs',
  active: false,
}];
</script>

<style>
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

.routes {
  display: flex;
  gap: 32px;
}

.route {
  font-size: 12.8px;
  font-weight: 500;
  list-style: none;
}

.route > a {
  color: var(--color-text-primary);
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
  padding-right: 42px;
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
