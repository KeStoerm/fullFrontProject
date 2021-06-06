<template>
  <div class="main-page-wrapper">
    <headline @click="click"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headline from './Headline.vue';

@Component({
  components: {
    Headline,
  }
})
export default class MainPage extends Vue {

    private click(): void {
        this.$emit('click');    
    }

}
</script>

<style lang="scss">
@import '@/assets/colors.scss';
.main-page-wrapper {
  display: flex;
  align-items: center;
}

</style>
