<template>
  <section class="roger-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Roger's Porcelain Patio</h1>
        <p>
          A stylish porcelain patio installed to create a clean, modern outdoor space. 
          Roger’s new patio provides a durable and elegant surface, perfect for relaxing or entertaining, 
          and complements his home beautifully.
        </p>
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
      <h2>How We Created Roger’s Porcelain Patio</h2>
      <ul>
        <li>Cleared and prepared the existing outdoor area</li>
        <li>Installed a strong sub-base for lasting stability</li>
        <li>Laid porcelain slabs for a stylish, low-maintenance finish</li>
        <li>Ensured smooth transitions and clean lines throughout</li>
        <li>Added final touches for a professional, polished look</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RogerPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Roger/Roger1.jpg', alt: 'Patio preparation', caption: 'Custom slabs cut to fit alongside the property' },
        { src: '/hdlandscaping/Roger/Roger2.jpg', alt: 'Porcelain installation in progress', caption: 'Laying the new pathway slabs with precision' },
        { src: '/hdlandscaping/Roger/Roger3.jpg', alt: 'Completed porcelain patio', caption: 'The finished porcelain patio with built in step' },
      ]
    };
  }
}
</script>

<style scoped>
.roger-patio-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  background: url('/hdlandscaping/Roger/Roger1.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}
</style>
