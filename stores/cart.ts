import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  image?: string
  description?: string
}
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),

  actions: {
    hydrate() {
      if (process.client) {
        const savedItems = localStorage.getItem('cartItems')
        this.items = savedItems ? JSON.parse(savedItems) : []
      }
    },
    addToCart(product: CartItem) {
      const exists = this.items.find(item => item.id === product.id)
      
      if (!exists) {
        this.items.push(product)
        this.saveToLocalStorage()
      } else {
        alert('Item already in cart!')
      }
    },
    removeFromCart(id: number) {
      this.items = this.items.filter(item => item.id !== id)
      this.saveToLocalStorage()
    },
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      if (process.client) {
        localStorage.setItem('cartItems', JSON.stringify(this.items))
      }
    },
  },
})
