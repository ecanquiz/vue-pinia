<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/mainB'

const store = useStore()
// `name` and `doubleCount` are reactive refs
// This will also create refs for properties added by plugins
// but skip any action or non reactive (non ref/reactive) property
const { name, doubleCount } = storeToRefs(store)
// the increment action can be just extracted
const { increment } = store
//name = "Eduardo B"
name.value = "Eduardo B"
increment()
</script>

<template>
  <div> {{name}}, {{doubleCount}} </div>
</template>