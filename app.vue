<template>
  <div>
    <Header @update:searchTerm="searchTerm = $event" />
    <NuxtPage :searchTerm="searchTerm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '~/components/Header.vue'

const searchTerm = ref('')
</script>
