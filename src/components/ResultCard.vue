<template>
  <div class="result-card columns" :key="rank.name">
    <span class="name column is-one-fifth" v-if="visible">{{ rank.name }}</span>
    <span class="name column is-one-fifth" v-if="!visible">
      ??? <button @click="showResult" class="button is-accent"> AUFDECKEN </button>
    </span>
    <scale-bar class="scale-bar column is-four-fifth" :current="rank.shamePointAmount" :max="totalShamePoints" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Headline from './Headline.vue';
import { ShameRank } from '@/types/types';
import ScaleBar from './ScaleBar.vue';
import Loader from './Loader.vue';

@Component({
  components: {
    Headline,
    ScaleBar,
    Loader,
  }
})
export default class ResultCard extends Vue {
  @Prop({ required: true })
  private rank!: ShameRank;

  @Prop({ required: true })
  private totalShamePoints!: number;

  private visible: boolean = false;

  private showResult(): void {
    this.visible = true;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/colors.scss';
  .result-card {
    padding: 0 20px;
    margin-top: 20px;
    background-color: $accent;
    -webkit-box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75); 
    box-shadow: 0px 4px 8px -3px rgba(0,0,0,0.75);
    align-items: center;

    .button.is-accent {
      float: right;
    }
    
    .name {
      font-size: 1.5rem;
      color: $textColor;
    }
  }
</style>
