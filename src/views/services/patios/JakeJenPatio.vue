<template>
  <section class="garden-project-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jake & Jen's Patio</h1>
        <p>A complete makeover: aftering a large scale landscaping project we installed a beautiful new patio for Jake & Jen.</p>
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
        <li>Leveled the garden to create a balanced foundation</li>
        <li>Added timbers for the structure of the raised patio</li>
        <li>Installed and levelled the patio</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'JakeJenPatio',
  data() {
    return {
      projectImages: [
        { src: '/hdlandscaping/Jake and Jen/Landscaping Birdseye.jpg', alt: 'Starting the project', caption: 'Starting the project: Creating a base for the patio' },
        { src: '/hdlandscaping/Jake and Jen/Landscaping1.jpg', alt: 'Garden leveling', caption: 'Levelling the ground ready for the patio' },
        { src: '/hdlandscaping/Jake and Jen/Installing Timbers.jpg', alt: 'Installing the timber frames', caption: 'Installing the timber frames for the seamless flowerbed' },
        { src: '/hdlandscaping/Jake and Jen/Patio installation.jpg', alt: 'Starting the patio', caption: 'Starting the patio' },
        { src: '/hdlandscaping/Jake and Jen/Ozzy.jpg', alt: 'Ozzy', caption: 'Ozzy helping with the installation' },
        { src: '/hdlandscaping/Jake and Jen/Jake7.jpg', alt: 'Completed Patio', caption: 'The completed patio alongside the new flowerbeds' },
      ]
    };
  }
}
</script>

<style scoped>
.garden-project-page {
  font-family: 'Arial', sans-serif;
}

</style>
