<template>
  <div class="product-details-page">
    <h1>Product Details</h1>
    <div v-if="loading">Loading product...</div>
    <div v-else-if="product">
      <h2>{{ product.name }}</h2>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <img :src="product.image" :alt="product.name" style="max-width: 300px; border-radius: 10px" />
    </div>
    <div v-else>
      <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const router = useRouter()

const productId = route.params.id as string

const product = ref<any>(null)
const loading = ref(true)

const { products, fetchProducts } = useProducts()

onMounted(async () => {
  if (!products.value.length) {
    await fetchProducts() // load products if not loaded yet
  }

  product.value = products.value.find(p => p.id.toString() === productId) || null
  loading.value = false

  if (!product.value) {
    
  }
})
</script>

<style scoped>
.product-details-page {
  padding: 2rem;
  max-width: 600px;
  margin: auto;
}
</style>
