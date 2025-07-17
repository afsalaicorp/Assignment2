<template>
  <div class="card">
    <div class="card-content" @click="$emit('click')">
      <img :src="product.image" alt="" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <strong>${{ product.price.toFixed(2) }}</strong>
    </div>

    <button class="add-button" @click.stop="$emit('add-to-cart', product)">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['click', 'add-to-cart'])

defineProps<{
  product: {
    id: number
    name: string
    price: number
    image: string
    description: string
  }
}>()
</script>

<style scoped>
.card {
  width: 220px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  cursor: pointer;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

h3 {
  font-size: 1rem;
  margin: 0.5rem 0 0.3rem;
}

p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}

strong {
  font-size: 1rem;
  color: #333;
}

.add-button {
  margin-top: 0.75rem;
  padding: 8px 12px;
  background-color:rgb(21, 178, 218);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-button:hover {
  background-color:rgb(29, 168, 192);
}
</style>
