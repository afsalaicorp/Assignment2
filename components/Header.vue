<template>
  <header class="header">
    <div class="logo">🛒 <strong>My Shoppie</strong></div>

    <nav class="nav-links">
      <NuxtLink to="/" class="nav-link home-link">🏠 Home</NuxtLink>
      <NuxtLink to="/" class="nav-link">Stores</NuxtLink>
      <NuxtLink to="/products" class="nav-link">Products</NuxtLink>
      <NuxtLink to="/offer" class="offer-zone">Offer Zone</NuxtLink>
    </nav>

    <div class="search-wrapper">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search products..."
        class="search-input"
        @input="onSearchInput"
      />
      <span class="search-icon"></span>
    </div>

    <div class="action-buttons">
      <NuxtLink to="/cart" class="action-button">🛍️<br /><span class="button-label">Cart (4)</span></NuxtLink>
      <NuxtLink to="/profile" class="action-button">👤<br /><span class="button-label">Profile</span></NuxtLink>
      <NuxtLink to="/seller" class="seller-button">Become A Seller</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['update:searchTerm'])

const searchTerm = ref('')
function onSearchInput() {
  emit('update:searchTerm', searchTerm.value)
}
</script>


