import { ref } from 'vue'

export function useProducts() {
  const products = ref<any[]>([])
  const loading = ref(false)

  const fetchProducts = async () => {
    loading.value = true
    try {
      const res = await fetch('https://dummyjson.com/products?limit=100')
      const data = await res.json()
      
      products.value = data.products.map((item: any) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        image: item.thumbnail,
        description: item.description,
        category: item.category,
      }))
    } catch (err) {
      console.error('Failed to fetch products:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    fetchProducts,
  }
}
