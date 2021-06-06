<template>
  <div class="headline">
    <div class="logo">
      <span class="global-headline">FullFront</span>
      <span class="global-subline">
        <transition name="name" appear>
          <span v-if="changing" key="a">
            fronting {{memberName}} since 2021
          </span>
          <span v-if="!changing" key="b">
            fronting {{memberName}} since 2021
          </span>
        </transition>
      </span>
    </div>
    <button id="start-button" @click="click" class="button is-accent hvr-underline-from-center">FRONTEN <i class="fas fa-angle-right"></i></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { teamMates } from '@/mockData/teamMates';
import { random, size } from 'lodash';

@Component
export default class Headline extends Vue {

  private memberName: string = teamMates[0];

  private changing: boolean = false;

  private click(): void {
    this.$emit('click');    
  }

  private mounted(): void {
    setInterval(() => {
      this.changing = !this.changing;
      this.memberName = teamMates[random(0, size(teamMates) - 1)];
    }, 5000)
  }

}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

  .headline {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(110deg, $accent 85%, $accentLighter 60%);
    position: relative;
    -webkit-box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75); 
    box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);

    .logo {
      color: $textColor;

      .global-headline {
        font-size: 6rem;
      }

      .global-subline {
        font-size: 1rem;
        position: relative;

        & > span {
          position: absolute;
          width: 30vw;
          bottom: 0;
          margin-bottom: -4px;
          margin-left: 2px;
        }
      }
    }
  }

  #start-button {
    font-size: 2rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    right: 0;
  }

  .name-enter-active, .name-leave-active {
    transition: 0.6s;
  }

  .name-enter {
    bottom: -10vw !important;
  }

  .name-enter-to, .name-leave {
    bottom: 0vw !important;
  }

  .name-leave-to {
    bottom: 10vw !important;
  }

</style>
