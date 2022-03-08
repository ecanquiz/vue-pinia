<template>
  <div>{{ myOwnName }}</div>  
</template>

<script>
import { mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  mounted(){
    this.myOwnName++
  },
  computed: {
    // gives access to this.counter inside the component and allows setting it
    // this.counter++
    // same as reading from store.counter
    //...mapWritableState(useCounterStore, ['counter'])
    // same as above but registers it as this.myOwnName
    ...mapWritableState(useCounterStore, {
      myOwnName: 'counter',
    }),
  },
}
</script>


