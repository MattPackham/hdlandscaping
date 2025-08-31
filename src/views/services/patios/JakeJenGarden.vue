<template>
  <section class="garden-project-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Garden Transformation Project</h1>
        <p>A complete makeover: leveling the garden, landscaping, patio installation, stylish planters, and a fresh grass lawn.</p>
        <router-link to="/contact" class="cta-button">Start Your Project</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Project Gallery</h2>
      <div class="gallery-grid">
        <div 
          v-for="(image, index) in projectImages" 
          :key="index" 
          class="gallery-item"
        >
          <img :src="image.src" :alt="image.alt" />
          <h3>{{ image.caption }}</h3>
        </div>
      </div>
    </div>

    <!-- Project Story Section -->
    <div class="info-section">
      <h2>How We Transformed This Garden</h2>
      <ul>
        <li>Leveled the garden to create a balanced foundation</li>
        <li>Designed and landscaped the space for beauty and function</li>
        <li>Installed a durable, stylish patio for outdoor living</li>
        <li>Added custom-built planters for greenery and structure</li>
        <li>Seeded the lawn to bring fresh, vibrant grass</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GardenProject',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Project1-before.jpg', alt: 'Garden before work', caption: 'Before: Uneven garden space' },
        { src: '/hdlandscaping/Project1-level.jpg', alt: 'Garden leveling', caption: 'Levelling the ground' },
        { src: '/hdlandscaping/Jake Patio.jpg', alt: 'Patio installation', caption: 'Patio installation in progress' },
        { src: '/hdlandscaping/Jake Patio 2.jpg', alt: 'Planters installation', caption: 'Custom planters added' },
        { src: '/hdlandscaping/Jake 6.jpg', alt: 'New grass lawn', caption: 'Freshly seeded grass lawn' },
      ]
    };
  }
}
</script>

<style scoped>
.garden-project-page {
  font-family: 'Arial', sans-serif;
}

</style>
