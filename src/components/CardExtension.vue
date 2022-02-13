<template>
  <div class="card">
    <div class="header">
      <div class="main">
        <img
          class="icon"
          :src="extension.icon"
        >
        <div>
          <div class="title">
            {{ extension.title }}
          </div>
          <RouterLink
            class="description"
            :to="{ name: 'store', query: { 'category': extension.category.id } }"
          >
            {{ extension.category.title }}
          </RouterLink>
        </div>
      </div>
      <ButtonInstall
        :author="extension.author.name"
        :extension="extension.id"
        class="button"
      />
    </div>
    <div class="data">
      <div class="description">
        {{ extension.description }}
      </div>
      <div class="block">
        <div class="block-label">
          Commands
        </div>
        <div class="commands">
          <div
            v-for="(command, index) in extension.commands"
            :key="index"
            class="block-value command"
          >
            <div class="command-header">
              <img
                class="command-icon"
                :src="extension.icon"
              >
              <div class="command-title">
                {{ command.title }}
              </div>
            </div>
            <div class="command-description">
              {{ command.description }}
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="extension.preferences.length > 0"
        class="block"
      >
        <div class="block-label">
          Preferences
        </div>
        <div class="preferences">
          <div
            v-for="(preference, index) in extension.preferences"
            :key="index"
            class="block-value preference"
          >
            <div class="preference-header">
              <IconPreference class="preference-icon" />
              <div class="preference-title">
                {{ preference.title }}
              </div>
            </div>
            <div class="preference-description">
              {{ preference.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="block media">
        <img
          v-for="media in extension.media"
          :key="media"
          :src="media"
        >
      </div>
      <div class="misc">
        <div class="block">
          <div class="block-label">
            Author
          </div>
          <div class="block-value">
            <RouterLink
              class="author"
              :to="{ name: 'user', params: { user: extension.author.name }}"
            >
              <Avatar
                class="avatar"
                :src="extension.author.avatar"
              />
              <div class="author-name">
                {{ extension.author.name }}
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="block">
          <div class="block-label">
            Contributors
          </div>
          <div class="block-value contributors">
            <RouterLink
              v-for="contributor in extension.contributors"
              :key="contributor.name"
              :to="{ name: 'user', params: { user: contributor.name }}"
            >
              <Avatar
                class="avatar"
                :src="contributor.avatar"
              />
            </RouterLink>
          </div>
        </div>

        <div class="block">
          <div class="block-label">
            Installs
          </div>
          <div class="block-value">
            {{ extension.installs }}
          </div>
        </div>

        <div class="block">
          <div class="block-label">
            Source
          </div>
          <div class="block-value source">
            <IconGithub class="source-icon" />
            <LinkExternal
              :url="extension.source"
              :label="'raycast/extensions'"
              class="source-link"
            />
          </div>
        </div>
      </div>
      <div class="links">
        <LinkExternal
          :url="getReportBugUrl(extension.title, extension.source, extension.author.github)"
          :label="'Report a Bug'"
          class="link"
        />
        <LinkExternal
          :url="getRequestFeatureUrl(extension.title, extension.source, extension.author.github)"
          :label="'Request a Feature'"
          class="link"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { RouterLink } from 'vue-router';

import Avatar from '@/components/Avatar.vue';
import ButtonInstall from '@/components/ButtonInstall.vue';
import LinkExternal from '@/components/LinkExternal.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconPreference from '@/components/icons/IconPreference.vue';
import { Extension } from '@/service';

defineProps({
  extension: {
    type: Object as PropType<Extension>,
    required: true,
  },
});

function getReportBugUrl(title: string, source: string, author: string) {
  return `https://github.com/raycast/extensions/issues/new?labels=extension,bug&body=%23%20Extension%20–%20%5B${title}%5D(${source})%0AAuthor:%20@${author}%0A%0A%3C!--%0APlease%20provide%20a%20clear%20and%20concise%20description%20of%20what%20the%20bug%20is.%20Include%0Ascreenshots%20if%20needed.%20Please%20test%20using%20the%20latest%20version%20of%20the%20extension,%20Raycast%20and%20API.%0A--%3E%0A%23%23%20Description%0A%0A%23%23%20Steps%20To%20Reproduce%0A%0A1.%0A2.%0A%0A%3C!--%0AYour%20bug%20will%20get%20fixed%20much%20faster%20if%20the%20extension%20author%20can%20easily%20reproduce%20it.%20Issues%20without%20reproduction%20steps%20may%20be%20immediately%20closed%20as%20not%20actionable.%0A--%3E%0A%0A%23%23%20The%20current%20behavior%0A%0A%0A%23%23%20The%20expected%20behavior%0A%0A`;
}

function getRequestFeatureUrl(title: string, source: string, author: string) {
  return `https://github.com/raycast/extensions/issues/new?labels=extension,feature+request&body=%23%20Extension%20–%20%5B${title}%5D(${source})%0AAuthor:%20@${author}%0A%0A%3C!--%0A%20%20Please%20provide%20a%20clear%20and%20concise%20description%20for%20your%20idea.%0A--%3E%0A%0A**Describe%20the%20feature%20and%20the%20current%20behavior/state.**%0A%0A**Who%20will%20benefit%20with%20this%20feature?**%0A%0A**Any%20Other%20info.**%0A`;
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 1000px;
  padding: 48px 40px;
  gap: 48px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-bg-card);
}

@media (max-width: 768px) {
  .card {
    width: calc(100% - 16px);
    margin-right: 8px;
    margin-left: 8px;
    padding: 32px 20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
}

.main {
  display: flex;
  gap: 16px;
  align-items: center;
}

.icon {
  width: 64px;
  height: 64px;
}

.title {
  color: var(--color-text);
  font-size: 20px;
  font-weight: 600;
}

.description {
  color: var(--color-text-primary);
  text-decoration: none;
}

@media (max-width: 768px) {
  .button {
    display: none;
  }
}

.data {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.block {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 8px;
}

.block-label {
  color: var(--color-text-label);
  font-family: var(--font-monospace);
}

.block-value {
  color: var(--color-text-secondary);
}

.commands,
.preferences {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.command,
.preference {
  width: calc((100% - 2 * 16px) / 3);
  font-size: 13px;
}

@media (max-width: 768px) {
  .command,
  .preference {
    width: calc((100% - 16px) / 2);
  }
}

.command-header,
.preference-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.command-icon,
.preference-icon {
  width: 16px;
  height: 16px;
}

.command-title,
.preference-title {
  color: var(--color-text-primary);
}

.command-description,
.preference-description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.media {
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
}

.media > img {
  flex: 0 0 auto;
  height: 250px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .media > img {
    height: 200px;
  }
}

.misc {
  display: flex;
  flex-wrap: wrap;
  column-gap: 64px;
  row-gap: 16px;
}

.avatar {
  width: 16px;
  height: 16px;
}

.author {
  display: flex;
  gap: 8px;
  color: var(--color-text-secondary);
  text-decoration: none;
}

.contributors {
  display: flex;
  gap: 16px;
}

.source {
  display: flex;
  gap: 8px;
  align-items: center;
}

.source-icon {
  width: 15px;
  height: 15px;
}

.source-link {
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  text-decoration: none;
  gap: 4px;
}

.source-link:hover {
  color: var(--color-text-primary);
}

.source-link-icon {
  width: 12px;
  height: 12px;
}

.links {
  display: flex;
  gap: 16px;
  font-size: 14px;
}

.link {
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  text-decoration: none;
  gap: 4px;
}

.link:hover {
  color: var(--color-text-primary);
}

.link-icon {
  width: 16px;
  height: 16px;
}
</style>
