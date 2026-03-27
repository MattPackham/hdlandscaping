<template>
  <section class="jackie-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jackie's Brickwork Seating Area</h1>
        <p>Beautifully crafted brickwork patio and garden features to enhance outdoor living and visual appeal.</p>
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
      <h2>How We Created Jackie's Brickwork Seating Area</h2>
      <ul>
        <li>Prepared the garden area and leveled the ground</li>
        <li>Laid a durable and visually striking brickwork patio</li>
        <li>Ensured seamless integration with existing landscaping</li>
        <li>Added the custom brickwork feature</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElegantGardenPathwayPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Jackie/Jackie Brickwork.jpg', alt: 'Garden before work', caption: 'The finished Brickwork seating area' },
        { src: '/hdlandscaping/Jackie/Jackie Brickwork Feature.jpg', alt: 'Building the bed wall', caption: 'A close-up of the custom feature' },
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
  background: url('/hdlandscaping/Jackie/Jackie Brickwork.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>