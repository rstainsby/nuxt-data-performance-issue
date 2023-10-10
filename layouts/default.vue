<template>
  <div>
    <div class="top-nav">
      <div class="links">
        <NuxtLink to="/home">Home</NuxtLink>
        <NuxtLink to="/fast-page">Fast Page</NuxtLink>
        <NuxtLink to="/data-load">Data Load</NuxtLink>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.top-nav {
  padding: 1rem;
  background-color: #363636;
  width: 100%;
}

.links {
  display: flex;
  gap: 1rem;
}

a {
  font-size: 1rem;
  color: white;
}
</style>