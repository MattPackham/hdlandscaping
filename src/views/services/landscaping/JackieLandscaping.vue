<template>
  <section class="jackie-patio-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jackie's Pathway & Flowerbed</h1>
        <p>Jackie wanted a new flowerbed installed alongside a pathway and stairs into her lovely garden.</p>
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
      <h2>How We Created Jackie's Pathway & Flowerbed</h2>
      <ul>
        <li>Prepared the garden area and leveled the ground</li>
        <li>Built the stonework wall for the flowerbed</li>
        <li>Added and levelled the new steps and path</li>
        <li>Ensured seamless integration with existing landscaping</li>
        <li>Added finishing touches for a polished, functional outdoor space</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JackiePatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Jackie/Patio10-before.jpg', alt: 'Garden before work', caption: 'Before: uneven garden space' },
        { src: '/hdlandscaping/Jackie/Jackie Flowerbed in progress.jpg', alt: 'Jackie Flowerbed in progress', caption: 'Jackie\'s flowerbed in progress' },
        { src: '/hdlandscaping/Jackie/Jackie Flowerbed.jpg', alt: 'Brickwork patio', caption: 'Flowerbed complete with plants' },
        { src: '/hdlandscaping/Jackie/Jackie Pathway (2).jpg', alt: 'Garden path', caption: 'Completed pathway and stairs' },
        { src: '/hdlandscaping/Jackie/Jackie Flowerbed and Pathway.jpg', alt: 'Finished garden', caption: 'Completed pathway and garden feature' },
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
  background: url('/hdlandscaping/Jackie/Jackie Flowerbed and Pathway.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>