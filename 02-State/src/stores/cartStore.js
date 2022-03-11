import { defineStore } from 'pinia'

export const cartStore = defineStore('cartStore', {
  state: () => {
    return {
      items: [],
      hasChanged: false
    }
  }
})
