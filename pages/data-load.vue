<template>
  <div class="container">
    <h1>Data Load Page</h1>
    <p>Request status: {{ requestStatus }}</p>
  </div>
</template>

<script setup lang="ts">
let requestStartTime: number;

const requestStatus = computed(() => {
  if (error.value) {
    return 'error';
  }
  else if (data.value) {
    return 'received';
  } else {
    return 'pending';
  }
})

const { data, error } = await useLazyFetch<number[][][]>('/api/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  onRequest: () => {
    console.log('Request sent');
    requestStartTime = Date.now();
  },
  onResponse: ({ response }) => {
    console.log('Response received', response.status);
    console.log(`Response time: ${Date.now() - requestStartTime}ms`);
  },
  onRequestError: ({ error }) => {
    console.log('Request error', error);
    showError({ statusCode: 400, message: error.message })
  },
  onResponseError: ({ response }) => {
    console.log('Response error', response.status, response.statusText);
    showError({ statusCode: response.status, message: response.statusText })
  }
});
</script>