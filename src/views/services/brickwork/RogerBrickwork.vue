<template>
  <section class="roger-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Roger's Brickwork Flowerbeds</h1>
        <p>Roger wanted some new flowerbeds built with lovely natural stone brickwork.</p>
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
      <h2>How We Created Roger's Brickwork Flowerbeds</h2>
      <ul>
        <li>Prepared the garden area and leveled the ground</li>
        <li>Laid durable and visually striking brickwork</li>
        <li>Added in base and drainage materials</li>
        <li>Finished the brickwork for seamless integration with the garden</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RogerBrickwork',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Roger/Roger Brickwork.jpg', alt: 'Flowerbeds', caption: 'New Brickwork flowerbeds created and installed with Roger\'s flowers' },
        { src: '/hdlandscaping/Roger/Brickwork 3.jpg', alt: 'Garden before work', caption: 'Another angle of the finished flowerbeds' },
        { src: '/hdlandscaping/Roger/Brickwork 2.jpg', alt: 'Building the bed wall', caption: 'A larger garden feature installed in the corner of Roger\'s garden' },
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
  background: url('/hdlandscaping/Roger/Roger Brickwork.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>