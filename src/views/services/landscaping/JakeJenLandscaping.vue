<template>
  <section class="garden-project-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Jake & Jens Garden</h1>
        <p>Jake & Jen wanted a renewed outdoor space to enjoy with their family. This involved a complete renvovation of the garden from the ground up.</p>
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
        <li>Designed and landscaped the space for beauty and function</li>
        <li>Installed a durable, stylish patio for outdoor living</li>
        <li>Added custom-built planters for greenery and structure</li>
        <li>Seeded the lawn to bring fresh, vibrant grass</li>
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
        { src: '/hdlandscaping/Jake and Jen/Landscaping Birdseye.jpg', alt: 'Starting the project', caption: 'Starting the landscaping' },
        { src: '/hdlandscaping/Jake and Jen/Landscaping Birdseye2.jpg', alt: 'Starting the project', caption: 'Creating room for the new planters' },
        { src: '/hdlandscaping/Jake and Jen/Harry Landscaping.jpg', alt: 'Installing the timber frames', caption: 'Installing the timber frames' },
        { src: '/hdlandscaping/Jake and Jen/Installing Flowerbed.jpg', alt: 'Flowerbed Timbers Installed', caption: 'Custom planters added' },
        { src: '/hdlandscaping/Jake and Jen/Jake3.jpg', alt: 'New grass lawn', caption: 'Freshly seeded grass lawn with flowers planted' },
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
