<template>  
  <div>{{ store.counter }}</div>
  <div>{{ tripleCounter }}</div>
</template>

<script>
import { useCounterStore } from '@/stores/counterStore'

export default {
  setup() {
    const store = useCounterStore()
    return { store }
  },
  computed: {
    tripleCounter() {
      return this.store.counter * 3
    },
  },
}
</script>
