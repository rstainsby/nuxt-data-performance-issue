<template>
  <div class="container">
    <h1>Welcome</h1>
    <p>This project is built to support a GitHub issue claiming that NuxtData causes performance issues when requesting
      large data sizes</p>
    <p>
      To recreate this issue:
    <ul>
      <li>Reload the site on this page</li>
      <li>Navigate to the <NuxtLink to="/fast-page">fast page</NuxtLink> and record the response time</li>
      <li>Navigate to the <NuxtLink to="/data-load">data load page</NuxtLink> and wait for the response to return</li>
      <li>Navigate back to the <NuxtLink to="/fast-page">fast page</NuxtLink> and record the new response time</li>
    </ul>
    the second response time will likely be significantly longer than the initial request.
    </p>

    <p>This issue occurs if <code>useFetch</code> is client-side only <code>ssr:false</code> or server-side</p>
    <p>However, it does not occur when the entire page is set to <code>ssr:false</code> in
      <code>nuxt.config.ts routeRules</code>.
    </p>
  </div>
</template>