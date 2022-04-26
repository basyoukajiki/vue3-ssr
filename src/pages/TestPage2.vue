<script lang="ts" setup>
const title = ref('TestPage2');
useHead({
  title: title.value,
  meta: [
    {
      name: 'description',
      content: 'test description',
    },
    {
      name: 'og:url',
      content: 'https://google.com',
    },
    {
      name: 'og:description',
      content: 'og: test description',
    },
  ],
});
</script>
<template>
  <h2 class="text-lg font-bold">
    Test2
  </h2>
</template>
<style lang="scss" scoped>

</style>
