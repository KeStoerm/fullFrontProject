<template>
  <div class="wrapper">
    <transition name="switch">
      <main-page class="inner-element" v-if="page === 0" @click="next" key="a"/>
      <results class="inner-element" v-if="page === 1" key="b" />
    </transition>
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainPage from './components/MainPage.vue';
import Results from './components/Results.vue';

@Component({
  components: {
    MainPage,
    Results,
  },
})
export default class App extends Vue {

  private page: number = 0;

  private async next(): Promise<void> {
    this.page = 1;
  }

  
  private prev(): void {
    this.page = 0;
  }

}
</script>

<style lang="scss">
.wrapper {
  width: 300vw;
  height: 100vh;
  position: relative;
  left: -100vw;

  .inner-element {
    position: absolute;
    left: 100vw;
    height: 100vh;
    width: 100vw;
  }


  .switch-enter-active, .switch-leave-active {
    transition: 1s;
  }

  .switch-enter {
    left: 0vw;
  }

  .switch-enter-to, .switch-leave {
    left: 100vw;
  }

  .switch-leave-to {
    left: 200vw;
  }
}

</style>
