import { defineStore } from 'pinia'

export const useStore = defineStore('mainA', {
  state: () => ({ 
    count: 0,
    name: 'sdfsdf',
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
