<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section footer-brand">
        <h2 class="footer-logo" aria-label="My Shoppie logo">🛒 My Shoppie</h2>
        <p class="footer-text">
          Shop top-quality essentials from trusted local stores. Fast delivery and great service – all in one place.
        </p>
      </div>

  
      <div class="footer-section">
        <h3>Support</h3>
        <ul>
          <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/returns">Returns</NuxtLink></li>
          <li><NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact</h3>
        <address class="contact-info">
          <p>Email: <a href="mailto:support@myshoppie.com">support@myshoppie.com</a></p>
          <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p>Kerala,Trivandrum</p>
        </address>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 My Shoppie. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1e293b;
  color: #e2e8f0;
  padding: 2rem 1rem 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.5rem;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  flex: 1 1 250px;
  min-width: 200px;
}

.footer-brand {
  max-width: 320px;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #60a5fa; 
}

.footer-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #cbd5e1;
  margin-bottom: 1rem;
  text-decoration: none;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #cbd5e1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover,
.footer-section a:focus {
  color: #60a5fa;
  outline: none;
}

.contact-info p {
  margin: 0.3rem 0;
  font-style: normal;
}

.contact-info a {
  color: #cbd5e1;
  text-decoration: none;
}

.contact-info a:hover,
.contact-info a:focus {
  color: #60a5fa;
  outline: none;
}

.footer-bottom {
  text-align: center;
  margin-top: 2.5rem;
  border-top: 1px solid #334155;
  padding-top: 1rem;
  color: #94a3b8;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 2rem;
  }

  .footer-section {
    flex: 1 1 auto;
  }
}
</style>
