<template>
  <section class="dan-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Dan's Patio Project</h1>
        <p>A bespoke patio built to rejuvenate the garden during a renovation.</p>
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
        <li>Laid a solid foundation for durability</li>
        <li>Installed a stylish, practical patio for everyday use</li>
        <li>Finished with neat edging for a rustic look</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DanPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Dan/Dan Patio 1.jpg', alt: 'Patio Continued', caption: 'Patio built next to garden gate for easy access' },
        { src: '/hdlandscaping/Dan/DanPatio.jpg', alt: 'Alley Patio', caption: 'Completed patio alongside new fencing' },
    
      ]
    };
  }
}
</script>

<style scoped>
.jim-lisa-patio-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  background: url('/hdlandscaping/Dan/DanPatio.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
