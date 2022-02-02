<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <div>
    <p>{{ counter.double }}</p>
    <button type="button" @click="counter.increment()">count is: {{ counter.count }}</button>
  </div>
</template>





