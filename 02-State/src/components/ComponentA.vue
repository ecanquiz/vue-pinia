<script setup>
import { useStore } from '@/stores/mainA'

const store = useStore()

store.counter++

</script>

<template>  
  <div>{{store.name}}</div>
  <div>{{store.counter}}</div>
</template>
