<template>
  <section class="fencing-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-content">
        <h1>Fencing Services</h1>
        <p>Secure and stylish fencing solutions for your property. We provide expert installation, repair, and design tailored to your needs.</p>
        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Gallery of Work -->
    <div class="gallery">
      <h2>Our Recent Fencing Projects</h2>
      <div class="gallery-grid">
        <div class="gallery-item" v-for="(fence, index) in fencingProjects" :key="index">
          <img :src="fence.image" :alt="fence.title" />
          <h3>{{ fence.title }}</h3>
        </div>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Fencing?</h2>
      <ul>
        <li>Professional and experienced team</li>
        <li>High-quality materials</li>
        <li>Custom designs to fit your property</li>
        <li>Reliable and timely installation</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Fencing',
  data() {
    return {
      fencingProjects: [
        // { title: 'Modern Wooden Fence', image: require('@/assets/fence1.jpg') },
        // { title: 'Decorative Metal Fence', image: require('@/assets/fence2.jpg') },
        // { title: 'Privacy Fence Installation', image: require('@/assets/fence3.jpg') },
        // { title: 'Garden Fence Design', image: require('@/assets/fence4.jpg') },
      ]
    };
  }
}
</script>

<style>
.fencing-page {
  font-family: 'Arial', sans-serif;
}

/* Hero */
.hero {
  /* background: url('@/assets/fencing-hero.jpg') no-repeat center center/cover; */
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
