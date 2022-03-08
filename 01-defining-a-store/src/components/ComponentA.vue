<script setup>
import { useStore } from '@/stores/mainA'

const store = useStore()
// ❌ This won't work because it breaks reactivity
// it's the same as destructuring from `props`
//const { name, increment, doubleCount } = store
//name = "Eduardo A"
//increment()
store.name = "Eduardo A"
store.increment()
</script>

<template>
  <!--div> {{name}}, {{doubleCount}} </div-->
  <div>{{store.name}}, {{store.doubleCount}}</div>
</template>