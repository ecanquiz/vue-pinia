import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    counter: 1
  }),
  getters: {
    someGetter: (state)=> state.counter * 2
  }
})

