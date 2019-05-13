<template lang="pug">
  .loading-container
    img(src='./assets/loading-animation.svg', alt='Betöltés...')
</template>

<script>
import Vue from 'vue';

export default Vue.component('loading', {});
</script>


<style lang="scss">
  .loading-container {
    padding: 15px;
    text-align: center;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
