<script lang="ts" setup>
const hoge = ref('hoge');
useHead({
  title: hoge.value,
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
    Test
  </h2>
  <AtomsHoge />
  <MoleculesFuga />
</template>
<style lang="scss" scoped>

</style>
