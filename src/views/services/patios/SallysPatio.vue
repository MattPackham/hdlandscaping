<template>
  <section class="sallys-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Sally's Patio Project</h1>
        <p>A beautiful patio designed and built to extend the living space and create a perfect spot for relaxation and entertaining.</p>
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
      <h2>How We Transformed Sally's Patio</h2>
      <ul>
        <li>Prepared the outdoor area for a new patio</li>
        <li>Installed a solid and durable foundation</li>
        <li>Laid a stylish patio design to suit Sally’s garden</li>
        <li>Finished with neat joints and edging</li>
        <li>Created an inviting outdoor living space</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SallysPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Sally-before.jpg', alt: 'Garden before patio', caption: 'Before: area ready for transformation' },
        { src: '/hdlandscaping/Sally-foundation.jpg', alt: 'Foundation preparation', caption: 'Preparing the base for the patio' },
        { src: '/hdlandscaping/Sally-patio.jpg', alt: 'Patio installation', caption: 'Laying down the patio' },
        { src: '/hdlandscaping/Sally-finished.jpg', alt: 'Completed patio', caption: 'The finished patio space' },
      ]
    };
  }
}
</script>

<style scoped>
.sallys-patio-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  background: url('/hdlandscaping/Patio 2.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
