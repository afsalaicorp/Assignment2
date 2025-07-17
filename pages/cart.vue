<template>
  <div class="cart-page">
    <h1>Your Cart</h1>

    <div v-if="cart.items.length === 0" class="empty-cart">
      Your cart is empty.
    </div>
    <div v-else>
      <ul class="cart-items">
        <li v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="item-details">
            <strong>{{ item.name }}</strong>
            <span class="price">— ${{ item.price.toFixed(2) }}</span>
          </div>
          <button class="remove-button" @click="cart.removeFromCart(item.id)">Remove</button>
        </li>
      </ul>

      <div class="cart-summary">
        <p class="total">Total: ${{ totalPrice }}</p>
        <button class="clear-button" @click="cart.clearCart">Clear Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { computed } from 'vue'

const cart = useCartStore()

const totalPrice = computed(() =>
  cart.items.reduce((total, item) => total + item.price, 0).toFixed(2)
)
</script>
<style scoped>
.cart-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.empty-cart {
  text-align: center;
  color: #777;
  font-style: italic;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.item-details {
  display: flex;
  gap: 0.5rem;
  font-size: 1rem;
}

.price {
  color: #555;
}

.remove-button,
.clear-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.remove-button:hover,
.clear-button:hover {
  background-color: #c0392b;
}

.cart-summary {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
