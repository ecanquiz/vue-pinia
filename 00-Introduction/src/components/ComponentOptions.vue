<template>  
  <div>
    <p>{{ counter.double }}</p>
    <button type="button" @click="counter.increment()">count is: {{ counter.count }}</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  name: "ComponentOptions",  
  mounted(){
    this.counter.count++
    // with autocompletion ✨
    this.counter.$patch({ count: this.counter.count + 1 })
    // or using an action instead
    this.counter.increment()
  },
  computed: {
    counter: ()=> useCounterStore()    
  }
};
</script>


