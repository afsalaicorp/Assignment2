<template>
  <div class="product-page">
    <h1 style="text-align: center;">PRODUCT PARADISE</h1>

    <div class="category-wrapper">
      <select v-model="selectedCategory" class="category-select">
        <option value="">All Categories</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <div class="product-grid">
      <div v-if="loading">Loading products...</div>
      <ProductCard
        v-else
        v-for="product in paginatedProducts"
        :key="product.id"
        :product="product"
        @click="addToCart(product)"
      />
    </div>

    <div class="pagination" style="text-align: center; margin-top: 20px;">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Previous</button>
      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="changePage(page)"
      >
        {{ page }}
      </button>
      <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Next</button>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue'
import ProductCard from '~/components/ProductCard.vue'
import Footer from '~/components/Footer.vue'
import { useProducts } from '~/composables/useProducts'
import { useCartStore } from '~/stores/cart'


const props = defineProps({
  searchTerm: {
    type: String,
    default: ''
  }
})

const { products, loading, fetchProducts } = useProducts()
const cart = useCartStore()

onMounted(() => {
  fetchProducts()
  cart.hydrate()
})

const selectedCategory = ref('')
const currentPage = ref(1)
const productsPerPage = 21

const categories = computed(() => {
  if (!products.value || !Array.isArray(products.value)) return []
  const cats = new Set(products.value.map(p => p.category || 'Unknown'))
  return Array.from(cats)
})

const filteredProducts = computed(() => {
  if (!products.value || !Array.isArray(products.value)) return []

  return products.value.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(props.searchTerm.toLowerCase())

    const matchesCategory = selectedCategory.value
      ? product.category === selectedCategory.value
      : true

    return matchesSearch && matchesCategory
  })
})

watch([() => props.searchTerm, selectedCategory], () => {
  currentPage.value = 1
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage
  return filteredProducts.value.slice(start, start + productsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / productsPerPage) || 1
})

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const addToCart = (product: any) => {
  cart.addToCart(product)
  alert(`Added ${product.name} to cart!`)
}
</script>

<style scoped>
.category-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.category-select {
  padding: 10px 14px;
  border: 2px solid #00c17b;
  border-radius: 20px;
  background: white;
  outline: none;
}

.pagination button {
  margin: 0 5px;
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid #00c17b;
  background: white;
  cursor: pointer;
  transition: background 0.3s;
}

.pagination button.active {
  background: #00c17b;
  color: white;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
