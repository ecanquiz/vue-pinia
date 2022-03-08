import { defineStore } from 'pinia'

export const useStore = defineStore('storeB', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 1,
      name: 'Eduardo B',
      isAdmin: true,
    }
  },
})
