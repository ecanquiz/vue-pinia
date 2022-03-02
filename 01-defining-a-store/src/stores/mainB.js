import { defineStore } from 'pinia'

export const useStore = defineStore('mainB', {
  state: () => ({ 
    count: 0,
    name: '',
  }),
  actions: {
    increment() {
      this.count++
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
