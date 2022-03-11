import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo A',
      isAdmin: true,
    }
  },
})
