<script setup>
import { useStore } from '@/stores/mainB'

const store = useStore()

store.counter++

store.$reset()
</script>

<template>  
  <div>{{store.name}}</div>
  <div>{{store.counter}}</div>
</template>
