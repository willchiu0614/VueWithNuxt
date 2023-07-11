import { defineStore } from 'pinia'

export const useCounterStore = defineStore('data3', {
  state: () => ({
    data3: 0
  }),
  actions: {
    increment() {
      this.data3 += 1
    },
    decrement() {
      this.data3 -= 1
    }
  },
  getters: {
    doubleCount: (state) => state.data3 * 2
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'data3',
        storage: process.client ? localStorage : null
      }
    ]
  }
})