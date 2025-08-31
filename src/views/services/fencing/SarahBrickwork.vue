<template>
  <section class="sarah-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Sarah's Brickwork Patio & Garden Feature</h1>
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
      <h2>How We Created Sarah's Patio & Garden Feature</h2>
      <ul>
        <li>Prepared the garden area and leveled the ground</li>
        <li>Laid a durable and visually striking brickwork patio</li>
        <li>Installed garden features such as raised planters and edging</li>
        <li>Ensured seamless integration with existing landscaping</li>
        <li>Added finishing touches for a polished, functional outdoor space</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SarahPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Patio10-before.jpg', alt: 'Garden before work', caption: 'Before: uneven garden space' },
        { src: '/hdlandscaping/Patio10-level.jpg', alt: 'Ground leveling', caption: 'Levelling the ground' },
        { src: '/hdlandscaping/Patio10-brickwork.jpg', alt: 'Brickwork patio', caption: 'Brickwork patio installation' },
        { src: '/hdlandscaping/Patio 10.jpg', alt: 'Garden feature', caption: 'Added custom garden features' },
        { src: '/hdlandscaping/Patio 7.jpg', alt: 'Finished patio', caption: 'Completed patio and garden feature' },
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
  background: url('/hdlandscaping/Patio 7.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>