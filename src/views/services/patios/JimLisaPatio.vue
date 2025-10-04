<template>
  <section class="jim-lisa-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jim & Lisa's Patio Project</h1>
        <p>A bespoke patio installed right outside their French doors. Jim & Lisa's new patio created the perfect link between indoor and outdoor living. Together with a new seating area feature perfect for eating outside.</p>
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
      <h2>How We Transformed 's Garden</h2>
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
  name: 'JimLisaPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Jim and Lisa/Grey Paving 2.jpg', alt: 'Alley Patio', caption: 'Installed the new patio starting at the garden gate' },
        { src: '/hdlandscaping/Jim and Lisa/Grey Paving.jpg', alt: 'Patio Continued', caption: 'Continuing the patio towards the French doors' },
        { src: '/hdlandscaping/Jim and Lisa/Patio2.jpg', alt: 'Patio installation', caption: 'Adding the new step, and seating area' },
        { src: '/hdlandscaping/Jim and Lisa/JimLisaPatio.jpg', alt: 'Finished patio', caption: 'Completed patio outside the French doors' },
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
  background: url('/hdlandscaping/Jim and Lisa/JimLisaPatio.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
