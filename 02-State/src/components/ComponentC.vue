<script setup>
import { cartStore } from '@/stores/cartStore'

const store = cartStore()

store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})

</script>

<template>  
  <div>{{ store.items }}</div>
  <div>{{ store.hasChanged }}</div>
</template>

