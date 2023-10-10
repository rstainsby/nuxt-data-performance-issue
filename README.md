# NuxtData Performance Issue
This project is built to support a GitHub issue claiming that NuxtData causes performance issues when requesting large data sizes.

To recreate this issue:

1. Reload the site (if already loaded)
2. Navigate to the fast page and record the response time
3. Navigate to the data load page and wait for the response to return
4. Navigate back to the fast page and record the new response time

The second response time will likely be significantly longer than the initial request.

This issue occurs if `useFetch`/`useAsyncData` is client-side only `ssr:false` or server-side.

However, it does not occur when the entire page is set to ssr:false in `nuxt.config.ts routeRules`.

It can also be remedied by calling `clearNuxtData()` and does not occur when using `$fetch`, strongly suggesting that the issue is caused by Nuxt's data caching.