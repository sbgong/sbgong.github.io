<script setup lang="ts">
defineProps<{ svg: string }>();
</script>

<template>
  <figure class="svg-image-root" v-html="svg" />
</template>

<style>
.svg-image-root {
  display: block;
  overflow-x: auto;
  padding: 1rem 0;
}
</style>
