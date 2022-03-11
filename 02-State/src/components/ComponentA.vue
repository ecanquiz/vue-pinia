<script setup>
import { useStore } from '@/stores/useStore'

const store = useStore()

store.counter++

store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})

//store.$reset()
</script>

<template>  
  <div>{{store.name}}</div>
  <div>{{store.counter}}</div>
</template>
