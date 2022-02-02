<template>
  <div>
    <p>{{ counter.double }}</p>
    <button type="button" @click="counter.increment()">count is: {{ counter.count }}</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  name: "ComponentComposition",
  setup() {
    const counter = useCounterStore()

    counter.count++
    // with autocompletion ✨
    counter.$patch({ count: counter.count + 1 })
    // or using an action instead
    counter.increment()
    return {counter}
  },
};
</script>




