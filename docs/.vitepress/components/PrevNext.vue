<script setup>
import { usePrevNext } from "vitepress/dist/client/theme-default/composables/prev-next";
const control = usePrevNext();
</script>

<template>
  <a v-if="control.prev?.link" :href="control.prev.link.replace(/\.[^/.]+$/, '')" class="page-nav-prev">
    <div v-html="control.prev.text" class="tooltip"></div>
  </a>
  <a v-if="control.next?.link" :href="control.next.link.replace(/\.[^/.]+$/, '')" class="page-nav-next">
    <div v-html="control.next.text" class="tooltip"></div>
  </a>
</template>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .page-nav-prev {
    position: fixed;
    top: 50%;
    left: calc(var(--vp-sidebar-width));
    width: 50px;
    height: 70px;
    opacity: 0.55;
    transition: all 0.2s;
    margin-top: calc(0px - var(--vp-nav-height));
  }

  .page-nav-prev:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotate(-135deg);
  }
  .tooltip {
    display: none;
  }
  .page-nav-prev:hover,
  .page-nav-next:hover {
    background: var(--vp-c-gray-soft);
    opacity: 1;
  }
  .VPDoc:not(.has-sidebar) .page-nav-prev,
  .VPDoc:not(.has-sidebar) .page-nav-next {
    display: none;
  }

  .page-nav-next {
    position: fixed;
    top: 50%;
    right: 0;
    width: 50px;
    height: 70px;
    opacity: 0.55;
    transition: all 0.2s;
    margin-top: calc(0px - var(--vp-nav-height));
  }
  .page-nav-next:before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform: rotate(45deg);
  }
}

@media (max-width: 960px) {
  .page-nav-prev,
  .page-nav-next {
    display: none;
  }
}
</style>
