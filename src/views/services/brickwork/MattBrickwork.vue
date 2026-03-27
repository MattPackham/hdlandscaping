<template>
  <section class="matt-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Matt's Brickwork Feature Wall</h1>
        <p>Matt wanted a feature wall built with stunning brickwork inside his property.</p>
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
      <h2>How We Created Matt's Brickwork Feature Wall</h2>
      <ul>
        <li>Prepared the wall area and leveled the ground</li>
        <li>Laid a durable and visually striking brickwork feature</li>
        <li>Added the custom brickwork feature</li>
        <li>Finished the feature wall with a smooth mortar finish and edgework plaster</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MattBrickwork',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Matt/Matt Brickwork.jpg', alt: 'Featurewall', caption: 'The finished feature wall' },
      ]
    };
  }
}
</script>
<style scoped>

.modern-brickwork-page {
  font-family: 'Arial', sans-serif;
}

.hero {
  background: url('/hdlandscaping/Matt/Matt Brickwork.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>