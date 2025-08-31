<template>
  <section class="modern-fencing-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Modern Fencing Project</h1>
        <p>Expertly designed and installed modern fencing to enhance both security and style for your property.</p>
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
      <h2>How We Built This Modern Fence</h2>
      <ul>
        <li>Planned layout to match the property style and ensure privacy</li>
        <li>Selected high-quality, durable fencing materials</li>
        <li>Installed posts and panels with precision and care</li>
        <li>Applied finishing touches to enhance aesthetics</li>
        <li>Ensured long-lasting stability and low maintenance</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModernFencing',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/ModernFencing1.jpg', alt: 'Fence layout', caption: 'Planning and layout of the modern fence' },
        { src: '/hdlandscaping/ModernFencing2.jpg', alt: 'Fence posts', caption: 'Installing sturdy posts' },
        { src: '/hdlandscaping/ModernFencing3.jpg', alt: 'Fence panels', caption: 'Attaching panels for a sleek look' },
        { src: '/hdlandscaping/Patio 12.jpg', alt: 'Finished fence', caption: 'Completed modern fence' },
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
  background: url('/hdlandscaping/Patio 12.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

</style>
