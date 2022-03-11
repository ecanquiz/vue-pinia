<template>  
  <div>{{ store.counter }} - {{ tripleCounter }}</div>
  <div>{{ myOwnName }} - {{ double }} - {{ magicValue }}</div>
</template>

<script>
import { mapState, mapWritableState } from 'pinia'
import { useCounterStore } from '@/stores/counterStore'

export default {
  mounted(){
    this.myOwnName++
  },
  setup() {
    const store = useCounterStore()
    return { store }
  },
  computed: {
    tripleCounter() {
      return this.store.counter * 3
    },
    //...mapState(useCounterStore, ['counter'])  
    ...mapWritableState(useCounterStore, {
      myOwnName: 'counter',
    }),
    ...mapState(useCounterStore, {
      //myOwnName: 'counter',
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
