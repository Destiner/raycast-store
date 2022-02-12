<template>
  <div id="app">
    <div class="bg" />
    <NavBar />
    <router-view />
    <footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<style>
:root {
  --color-text: #fff;
  --color-text-primary: #fffc;
  --color-text-secondary: #fff9;
  --color-text-label: #fff3;
  --color-bg: #05010d;
  --color-bg-card: #ffffff0c;
  --color-bg-button: #fff3;
  --color-bg-button-hover: #ffffff3f;
  --color-border: #ffffff19;
  --font: 'InterVariable', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  --font-monospace: 'JetBrains Mono', 'Lucida Console', 'Courier New', 'Courier', monospace;
}

body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text-primary);
  font-family: var(--font);
  line-height: 1.5;
}

.bg {
  position: fixed;
  top: 0;
  left: 50%;
  width: 1250px;
  height: 633px;
  margin-left: 55px;
  transform: matrix(1, 0, 0, 1, -625, 0);
  background: url('/assets/bg.png');
  pointer-events: none;
}

footer {
  height: 32px;
}

/* Reset */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#app {
  isolation: isolate;
}
</style>
