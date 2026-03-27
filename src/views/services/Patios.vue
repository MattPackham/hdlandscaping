<template>
  <section class="patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Patio Services</h1>
        <p>Enhancing outdoor living spaces with high-quality patios designed for beauty and durability.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Patio Projects</h2>
      <div class="gallery-grid">
        <router-link
          v-for="(patio, index) in patioProjects"
          :key="index"
          :to="`/services/patios/${patio.slug}`"
          class="gallery-item"
        >
          <img :src="patio.image" :alt="patio.title" />
          <h3>{{ patio.title }}</h3>
        </router-link>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Your Patio?</h2>
      <ul>
        <li>Custom patio designs to fit your space</li>
        <li>Durable, high-quality materials</li>
        <li>Professional installation with attention to detail</li>
        <li>Enhance outdoor living and property value</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Patios',
  data() {
    return {
      patioProjects: [
        { title: "Jake & Jen's Patio", image: '/hdlandscaping/Jake and Jen/Jake7.jpg', slug: 'jake-jens-patio' },
        { title: "Jim and Lisa's Garden", image: '/hdlandscaping/Jim and Lisa/JimLisaPatio.jpg', slug: 'jim-lisas-patio' },
        { title: "Jan's Patio", image: '/hdlandscaping/Jan/JanPatio.jpg', slug: 'jan-patio' },
        { title: "Dan's Patio", image: '/hdlandscaping/Dan/DanPatio.jpg', slug: 'dan-patio' },
        { title: "Paving Stones", image: '/hdlandscaping/Paving Stones.jpg', slug: 'paving-stones' },
      ]
    };
  }
}
</script>

<style scoped>
.patio-page {
  font-family: 'Arial', sans-serif;
}
</style>
