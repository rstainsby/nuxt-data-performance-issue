<template>
  <div class="container">
    <h1>Fast Loading Page</h1>
    <p>This page contains minimal content and will load in less than 50ms.</p>
    <p>After visiting the <NuxtLink to='/data-load'>data load</NuxtLink> page it will likely take upwards of 400ms to load
      this page.</p>
    <p>Calling <code>clearNuxtData()</code> will resolve this response issue.</p>

    <button @click="() => clearNuxtData()">Clear Nuxt Data</button>
  </div>
</template>

<script setup lang="ts">

</script>