<template>
  <section class="garden-project-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Paving Stone Pathway</h1>
        <p>A simple yet elegant paving stone pathway.</p>
        <router-link to="/contact" class="cta-button">Start Your Project</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <!-- <div class="gallery">
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
    </div> -->

    <!-- Project Story Section -->
    <div class="info-section">
      <h2>How We Transformed This Garden</h2>
      <ul>
        <li>Leveled the garden to create a balanced foundation</li>
        <li>Designed and landscaped the space for beauty and function</li>
        <li>Installed a durable, stylish paving slabs</li>
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
        { src: '/hdlandscaping/Paving Stones.jpg', alt: 'Starting the project', caption: 'Paving Stone Pathway' },
      ]
    };
  }
}
</script>

<style scoped>
.paving-stone-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  background: url('/hdlandscaping/Paving Stones.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
