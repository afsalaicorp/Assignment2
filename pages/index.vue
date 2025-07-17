<template>
  <div class="shop-page">
  
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <span class="tag">Premium Products</span>
          <h1 class="headline">
            Top Quality Essentials - Straight From Your Neighborhood!
          </h1>
          <p class="subtext">
            Shop with confidence from your favorite local stores. Enjoy handpicked,
            high-grade essentials delivered fast to your doorstep.
          </p>
        </div>
        <div class="hero-image">
          <img src="/blueshop.jpg" alt="Shopping illustration" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Footer from '~/components/Footer.vue'
import { useCartStore } from '~/stores/cart'
import '~/assets/styles/home.css'

const cart = useCartStore()
const searchTerm = ref('')

onMounted(() => {
  cart.hydrate()
})
</script>
