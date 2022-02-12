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
import { Extension } from '@/service';

const extension: Extension = {
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
.page {
  margin-top: 96px;
}

.card {
  margin: 0 auto;
}
</style>
