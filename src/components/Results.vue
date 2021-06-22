<template>
  <div>
    <headline />
    <div class="result-content">
      <transition-group name="results" v-if="!loading">
        <result-card v-for="rank in ranking" :rank="rank" :totalShamePoints="totalShamePoints" :key="rank.name" />
      </transition-group>

      <loader v-if="loading"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headline from './Headline.vue';
import { ShameRanking } from '@/types/types';
import ScaleBar from './ScaleBar.vue';
import { getShamePointsForMonth } from '@/controller/shameController';
import { analyseShamePointResult, calculateTotalShamePoints } from '@/utils/shameUtils';
import Loader from './Loader.vue';
import ResultCard from './ResultCard.vue';

@Component({
  components: {
    Headline,
    ScaleBar,
    Loader,
    ResultCard,
  }
})
export default class Results extends Vue {
  private ranking: ShameRanking = [];

  private totalShamePoints: number = 0;

  private loading: boolean = false;

  private mounted(): void {
    this.loadResult();
  }

  private async loadResult(): Promise<void> {
    this.loading = true;

    const results = await getShamePointsForMonth();

    this.ranking = analyseShamePointResult(results);
    this.totalShamePoints = calculateTotalShamePoints(results);

    this.loading = false;
  }

  private click(): void {
      this.$emit('click');
  }

}
</script>

<style lang="scss">
@import '@/assets/colors.scss';
  progress.progress {
    margin-top: 5px;
    border: 5px solid $secondary;
    border-radius: 0;
    height: 50px;
  }

  .result-content {
    margin-top: 40px;

    .results-enter-active, .results-leave-active {
      transition: all 1s;
    }

    .results-enter, .results-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  }
</style>
