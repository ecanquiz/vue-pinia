<template>
  <div>{{ myOwnName }}</div>
  <div>{{ double }}</div>
  <div>{{ magicValue }}</div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counterStore'

export default {
  computed: {
    //...mapState(useCounterStore, ['counter'])    
    ...mapState(useCounterStore, {
      myOwnName: 'counter',
      // you can also write a function that gets access to the store
      double: store => store.counter * 2,
      // it can have access to `this` but it won't be typed correctly...
      magicValue(store) {
        return store.someGetter + store.counter + this.double
      },
    })
  },
}
</script>
