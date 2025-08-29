<template>
  <section class="patios-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Patio Services</h1>
        <p>Enhancing outdoor living spaces with high-quality patios designed for beauty and durability.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Patio Projects</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(patio, index) in patioProjects" :key="index">
          <img :src="patio.image" :alt="patio.title" />
          <h3>{{ patio.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Your Patio?</h2>
      <ul>
        <li>Custom patio designs to fit your space</li>
        <li>Durable, high-quality materials</li>
        <li>Professional installation with attention to detail</li>
        <li>Enhance outdoor living and property value</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Patios',
  data() {
    return {
      patioProjects: [
        // { title: 'Stone Patio with Fire Pit', image: require('@/assets/patio1.jpg') },
        // { title: 'Modern Concrete Patio', image: require('@/assets/patio2.jpg') },
        // { title: 'Raised Deck Patio', image: require('@/assets/patio3.jpg') },
        // { title: 'Garden Patio Design', image: require('@/assets/patio4.jpg') },
      ]
    };
  }
}
</script>

<style>
.patios-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  /* background: url('@/assets/patio-hero.jpg') no-repeat center center/cover; */
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 5px;
}

.hero h1 {
  font-size: 2.5rem;
  margin: 0;
}

.hero p {
  font-size: 1.2rem;
  margin: 10px 0 20px;
}

/* CTA Button */
.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: #e74c3c;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #ff6f61;
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Gallery */
.gallery {
  padding: 50px 20px;
  text-align: center;
}

.gallery h2 {
  font-size: 2rem;
  margin-bottom: 30px;
}

.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.gallery-item {
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  display: block;
}

.gallery-item h3 {
  font-size: 1.1rem;
  padding: 10px;
  background: #fff;
  margin: 0;
}

/* Info Section */
.info-section {
  padding: 50px 20px;
  background-color: #f5f5f5;
}

.info-section h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
}

.info-section ul {
  max-width: 600px;
  margin: 0 auto;
  list-style-type: disc;
  padding-left: 20px;
  font-size: 1.1rem;
}
</style>
