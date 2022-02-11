<template>
  <div id="app">
    <div class="bg" />
    <div>
      <router-link :to="'/'">
        Home
      </router-link>
      <router-link :to="'/about'">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --color-bg: #05010d;
  --font: 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
  --font-monospace: 'JetBrains Mono', 'Lucida Console', 'Courier New', 'Courier', monospace;
}

body {
  margin: 0;
  background: var(--color-bg);
  font-family: var(--font);
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
