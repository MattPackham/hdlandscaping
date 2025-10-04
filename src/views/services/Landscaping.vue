<template>
  <section class="landscaping-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Landscaping Services</h1>
        <p>Transform your outdoor space with professional landscaping solutions, including garden design, planting, and hardscaping.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Landscaping Projects</h2>
      <div class="gallery-grid">
        <router-link
          v-for="(project, index) in landscapingProjects"
          :key="index"
          :to="`/services/landscaping/${project.slug}`"
          class="gallery-item"
        >
          <img :src="project.image" :alt="project.title" />
          <h3>{{ project.title }}</h3>
        </router-link>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Landscaping?</h2>
      <ul>
        <li>Custom landscape designs for your property</li>
        <li>Expert planting and hardscaping</li>
        <li>Enhances beauty and functionality of your outdoor space</li>
        <li>Reliable and professional service</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landscaping',
  data() {
    return {
      landscapingProjects: [
        { title: 'Jake & Jen\'s Modern Garden', image: '/hdlandscaping/Jake and Jen/Jake6.jpg', slug: 'jake-jens-landscaping' },
        { title: 'Jackie\'s Flowerbed & Steps', image: '/hdlandscaping/Jackie/Jackie Flowerbed and Pathway.jpg', slug: 'jackie-landscaping' },
      ]
    }; 
  }
}
</script>

<style scoped>
.landscaping-page {
  font-family: 'Arial', sans-serif;
}

</style>
