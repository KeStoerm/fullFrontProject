<template>
  <div class="scale-bar-wrapper">
    <transition name="bar" appear>
      <div class="scale-bar-inner" :style="widthStyle">
        <span>{{ current }}</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ScaleBar extends Vue {
  @Prop({ required: true })
  private max!: number;

  @Prop({ required: true })
  private current!: number;

  private get widthStyle(): object {
    const width: number = this.current / this.max * 100;

    return {
      width: `${width}%`
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

$height: 40px;

.scale-bar-wrapper {
  padding: 0 !important;
  width: 100%;
  height: $height;

  .scale-bar-inner {
    background: $accentLighter;
    height: inherit;
    color: $textColor;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .bar-enter-active, .bar-leave-active {
    transition: all 1s;
  }

  .bar-enter {
    width: 0 !important;
  }
}

</style>
