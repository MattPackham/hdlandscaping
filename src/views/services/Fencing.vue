<template>
  <section class="fencing-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Fencing Services</h1>
        <p>Secure and stylish fencing solutions for your property. We provide expert installation, repair, and design tailored to your needs.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Fencing Projects</h2>
      <div class="gallery-grid">
        <router-link
          v-for="(fencing, index) in fencingProjects"
          :key="index"
          :to="`/services/fencing/${fencing.slug}`"
          class="gallery-item"
        >
          <img :src="fencing.image" :alt="fencing.title" />
          <h3>{{ fencing.title }}</h3>
        </router-link>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD fencings & Pavings for Fencing?</h2>
      <ul>
        <li>Professional and experienced team</li>
        <li>High-quality materials</li>
        <li>Custom designs to fit your property</li>
        <li>Reliable and timely installation</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fencing',
  data() {
    return {
      fencingProjects: [
        { title: 'Modern Wooden Fencing', image: '/hdlandscaping/Patio12.jpg' , slug: 'modern-wooden-fencing' },
        { title: 'Sarah\'s Brickwork', image: '/hdlandscaping/Patio10.jpg', slug: 'sarahs-brickwork' },
        { title: 'Elegant Garden Pathway', image: '/hdlandscaping/Landscaping3.jpg', slug: 'elegant-garden-pathway' },
      ]
    };
  }
}
</script>

<style scoped>
.fencing-page {
  font-family: 'Arial', sans-serif;
}

</style>
