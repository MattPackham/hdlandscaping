<template>
  <section class="jan-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jan's Patio Project</h1>
        <p>A bespoke patio built to replace an old, worn-out patio. The fresh stone gives the garden a revitalised look.</p>
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
        <li>Removed the existing patio</li>
        <li>Laid a solid foundation for durability</li>
        <li>Installed a stylish, practical patio for everyday use</li>
        <li>Cut the stones and steps to integrate with the current lawn</li>
        <li>Finished with neat edging for a polished look</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JimLisaPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Jan/Jan 2 Edited.jpg', alt: 'Before', caption: 'The old patio before removal' },
        { src: '/hdlandscaping/Jan/Jan 5.jpg', alt: 'Patio Continued', caption: 'Installing the steps' },
        { src: '/hdlandscaping/Jan/JanPatio.jpg', alt: 'Patio Continued', caption: 'Finished patio construction' },
        { src: '/hdlandscaping/Jan/Jan 1.jpg', alt: 'Patio Continued', caption: 'Sealed slabs for longevity' },
        { src: '/hdlandscaping/Jan/Jan 4.jpg', alt: 'Patio Continued', caption: 'Complete patio' },


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
  background: url('/hdlandscaping/Jan/JanPatio.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
