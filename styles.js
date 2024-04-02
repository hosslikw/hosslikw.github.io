/*<template>
  <div>
    <input
      type="range"
      :min="min"
      :max="max"
      v-model="localThreshold"
   >
    <span>{{ localThreshold }}</span>
  </div>
</template>

<script>
import { Model } from 'vue-property-decorator';

export default {
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    threshold: {
      type: [String, Number],
      default: 'var(--measure)',
    },
  },
  // v-model setup with Model decorator
  Model: {
    prop: 'threshold',
    event: 'input',
  },
  data() {
    return {
      localThreshold: this.threshold,
    };
  },
};*/</script>
