<template>
  <section class="brickwork-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Brickwork Services</h1>
        <p>Stylish and functional brickwork solutions for your property. We provide expert installation, repair, and design tailored to your needs.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Brickwork Projects</h2>
      <div class="gallery-grid">
        <router-link
          v-for="(brickwork, index) in brickworkProjects"
          :key="index"
          :to="`/services/brickwork/${brickwork.slug}`"
          class="gallery-item"
        >
          <img :src="brickwork.image" :alt="brickwork.title" />
          <h3>{{ brickwork.title }}</h3>
        </router-link>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Brickwork?</h2>
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
  name: 'Brickwork',
  data() {
    return {
      brickworkProjects: [
        // { title: 'Contemporary Brickwork Wall', image: '/hdlandscaping/BrickworkWall.jpg' , slug: 'contemporary-brickwork' },
        { title: 'Jackie\'s Brickwork', image: '/hdlandscaping/Jackie/Jackie Brickwork.jpg', slug: 'jackies-brickwork' },
      ]
    };
  }
}
</script>

<style scoped>
.Brickwork-page {
  font-family: 'Arial', sans-serif;
}

</style>
