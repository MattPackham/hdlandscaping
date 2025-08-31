<template>
  <section class="steves-garden-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Steve's Garden Project</h1>
        <p>A bespoke patio installed right outside the French doors, creating the perfect link between indoor and outdoor living.</p>
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
      <h2>How We Transformed Steve's Garden</h2>
      <ul>
        <li>Prepared the area directly outside the French doors</li>
        <li>Laid a solid foundation for durability</li>
        <li>Installed a stylish, practical patio for everyday use</li>
        <li>Created seamless access between the home and garden</li>
        <li>Finished with neat edging for a polished look</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StevesGarden',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Steves-before.jpg', alt: 'Garden before patio', caption: 'Before: space outside the French doors' },
        { src: '/hdlandscaping/Steves-foundation.jpg', alt: 'Foundation preparation', caption: 'Preparing the foundation' },
        { src: '/hdlandscaping/Steves-patio.jpg', alt: 'Patio installation', caption: 'Patio being laid in place' },
        { src: '/hdlandscaping/Patio11.jpg', alt: 'Finished patio', caption: 'Completed patio outside the French doors' },
      ]
    };
  }
}
</script>

<style scoped>
.steves-garden-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  background: url('/hdlandscaping/Patio11.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
