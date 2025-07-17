<template>
  <div class="profile-page">
    <div class="profile-card">
      <h2>👤 User Profile</h2>
      <p><strong>Name:</strong>Rajeev P</p>
      <p><strong>Email:</strong>rajeev123@gmail.com</p>
      <p><strong>Member Since:</strong> January 2024</p>

      <button class="logout-button" @click="logout">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  alert('You have been logged out!')
  // Placeholder for actual logout logic
  router.push('/')
}
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f3f4f6;
  padding: 2rem;
}

.profile-card {
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: left;
}

.profile-card h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #2f5d8a;
}

.profile-card p {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #374151;
}

.logout-button {
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.logout-button:hover {
  background-color: #b91c1c;
}
</style>
