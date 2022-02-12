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
          <div>
            {{ extension.category.title }}
          </div>
        </div>
      </div>
      <ButtonInstall
        :author="author"
        :extension="id"
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
              <img
                class="preference-icon"
                :src="extension.icon"
              >
              <div class="preference-title">
                preference.title
              </div>
            </div>
            <div class="preference-description">
              preference.description
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div
          v-for="(media, index) in extension.media"
          :key="index"
          class="media"
        >
          <img
            v-if="media.type === 'image'"
            :src="media.path"
          >
          <img
            v-if="media.type === 'video'"
            :src="media.path"
          >
        </div>
      </div>
      <div class="misc">
        <div class="block">
          <div class="block-label">
            Author
          </div>
          <div class="block-value author">
            <Avatar
              class="avatar"
              :src="extension.author.avatar"
            />
            <div>
              {{ extension.author.name }}
            </div>
          </div>
        </div>

        <div class="block">
          <div class="block-label">
            Contributors
          </div>
          <div class="block-value contributors">
            <Avatar
              v-for="contributor in extension.contributors"
              :key="contributor.name"
              class="avatar"
              :src="contributor.avatar"
            />
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
            <a
              class="source-link"
              :href="extension.source"
            >
              raycast/extensions
              <IconExternalLink class="source-link-icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="links">
        <a class="link">
          Report a Bug
          <IconExternalLink class="link-icon" />
        </a>
        <a class="link">
          Request a Feature
          <IconExternalLink class="link-icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from './Avatar.vue';
import ButtonInstall from './ButtonInstall.vue';
import IconExternalLink from './icons/IconExternalLink.vue';
import IconGithub from './icons/IconGithub.vue';

const author = 'thomas';
const id = 'spotify-controls';

// const extension = await Service.getExtension(author, id);
const extension = {
  id: 'spotify-controls',
  title: 'Spotify Controls',
  description: 'Control the Spotify app for macOS with your keyboard.',
  icon: '/assets/icons/spotify-controls/icon.png',
  category: {
    title: 'Apps',
    id: 'apps',
  },
  commands: [
    {
      title: 'Play',
      description: 'Plays current track in Spotify.',
    },
    {
      title: 'Pause',
      description: 'Pause current track in Spotify.',
    },
    {
      title: 'Toggle Play/Pause',
      description: 'Toggles play or pause of current track in Spotify.',
    },
    {
      title: 'Previous Track',
      description: 'Skips to the previous track in Spotify.',
    },
    {
      title: 'Next Track',
      description: 'Skips to the next track in Spotify.',
    },
    {
      title: 'Current Track',
      description: 'Currently playing track in Spotify.',
    },
    {
      title: 'Copy Current Track URL',
      description: 'Currently playing song\'s URL in Spotify.',
    },
    {
      title: 'Toggle Shuffle',
      description: 'Toggles shuffle mode in Spotify.',
    },
    {
      title: 'Shuffle Play',
      description: 'Plays current track with shuffle enabled.',
    },
    {
      title: 'Toggle Repeat',
      description: 'Toggles repeat mode in Spotify.',
    },
  ],
  preferences: [],
  author: {
    name: 'thomas',
    avatar: '/assets/users/thomas.jpeg',
  },
  contributors: [
    {
      name: 'ron-myers',
      avatar: '/assets/users/ron-myers.jpeg',
    },
    {
      name: 'altrdev',
      avatar: '/assets/users/altrdev.jpeg',
    },
  ],
  installs: 3988,
  source:
    'https://github.com/raycast/extensions/tree/9750b478df29f2630a0186d64dfacfd57ff7b7ea/extensions/spotify-controls/',
  media: [{
    path: '/assets/media/spotify-controls/1.png',
    type: 'image',
  }],
};
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
  width: 295px;
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
  height: 250px;
}

.media > img,
.media > video {
  height: 100%;
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
