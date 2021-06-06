<template>
  <div class="load-wrapper">
    <p>F</p>
    <p>R</p>
    <p>O</p>
    <p>N</p>
    <p>T</p>
    <p>I</p>
    <p>N</p>
    <p>G</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loader extends Vue {


}
</script>

<style lang="scss">
  @import '@/assets/colors.scss';

  .load-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #e0e7f5;
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @for $i from 1 through 8 {
      p:nth-child(#{$i}) {
        animation: bounce 1s #{$i / 10}s infinite ease-in;
      }
    }

    p {
      opacity: 1;
      font-size: 3rem;
    }
  }

  @keyframes bounce {
    0%, 100% {
      margin-top: 0;
    }

    50% {
      margin-top: -20px;
    }
  }

</style>
