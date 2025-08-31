<template>
  <section class="dave-flowerbed-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Dave's Brickwork Flowerbed</h1>
        <p>Custom-built brickwork flowerbed designed to enhance garden aesthetics and functionality.</p>
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
      <h2>How We Created Dave's Flowerbed</h2>
      <ul>
        <li>Prepared and leveled the ground for a solid foundation</li>
        <li>Constructed the brickwork flowerbed with attention to durability and aesthetics</li>
        <li>Added soil, plants, and finishing touches for a vibrant garden feature</li>
        <li>Ensured seamless integration with existing landscaping</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DaveFlowerbed',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/LandScaping1-before.jpg', alt: 'Garden before flowerbed', caption: 'Before: bare garden area' },
        { src: '/hdlandscaping/LandScaping1-level.jpg', alt: 'Ground leveling', caption: 'Levelling and preparing the ground' },
        { src: '/hdlandscaping/LandScaping1-brickwork.jpg', alt: 'Flowerbed brickwork', caption: 'Brickwork installation for flowerbed' },
        { src: '/hdlandscaping/LandScaping1-plants.jpg', alt: 'Plants added', caption: 'Adding soil and plants' },
        { src: '/hdlandscaping/LandScaping1.jpg', alt: 'Finished flowerbed', caption: 'Completed flowerbed' },
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
  background: url('/hdlandscaping/LandScaping1.jpg') no-repeat center center/cover !important;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}


</style>
