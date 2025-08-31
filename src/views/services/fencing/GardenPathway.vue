<template>
  <section class="elegant-pathway-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Elegant Garden Pathway & Steps</h1>
        <p>Creating a charming and functional brickwork pathway with steps, enhancing both accessibility and style in the garden.</p>
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
      <h2>How We Built the Elegant Pathway & Steps</h2>
      <ul>
        <li>Planned the pathway route for both aesthetics and functionality</li>
        <li>Prepared and leveled the ground to ensure a stable foundation</li>
        <li>Laid high-quality bricks in a visually appealing pattern</li>
        <li>Constructed steps where needed for easy access</li>
        <li>Added finishing touches and ensured seamless integration with the garden</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElegantPathway',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Landscaping3-before.jpg', alt: 'Garden before work', caption: 'Before: uneven garden area' },
        { src: '/hdlandscaping/Landscaping3-level.jpg', alt: 'Ground leveling', caption: 'Levelling and preparing the ground' },
        { src: '/hdlandscaping/Landscaping3-pathway.jpg', alt: 'Pathway brickwork', caption: 'Brickwork pathway installation' },
        { src: '/hdlandscaping/Landscaping3-steps.jpg', alt: 'Steps installation', caption: 'Constructed elegant steps' },
        { src: '/hdlandscaping/Landscaping3.jpg', alt: 'Finished pathway', caption: 'Completed pathway and steps' },
      ]
    };
  }
}
</script>

<style scoped>

.modern-fencing-page {
  font-family: 'Arial', sans-serif;
}

.hero {
  background: url('/hdlandscaping/Landscaping3.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>
