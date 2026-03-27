<template>
  <section class="gallery-page">

    <!-- Gallery of Work -->
    <div class="gallery">
      <h1>Gallery</h1>
      <div class="gallery-mode-grid">
        <a
          v-for="(picture, index) in galleryPictures"
          :key="index"
          :href="picture.image"
          target="_blank"
          rel="noopener noreferrer"
          class="gallery-mode-item"
        >
          <img :src="picture.image" :alt="picture.title" />
        </a>
      </div>
    </div>

    <!-- Additional Info Section -->
    <div class="info-section">
      <h2>Why Choose HD Patios & Pavings for Brickwork?</h2>
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
  name: 'Gallery',
  data() {
    return {
      galleryPictures: []
    };
  },
  created() {
    const images = import.meta.glob('../assets/Gallery/*.{jpg,jpeg,png}', {
      eager: true,
      import: 'default'
    });

    this.galleryPictures = Object.entries(images).map(([path, image]) => {
      const fileName = path.split('/').pop();

      return {
        title: fileName.replace(/\.[^/.]+$/, ""),
        image,
        slug: fileName.toLowerCase().replace(/\.[^/.]+$/, "").replace(/\s+/g, '-')
      };
    });
  }
};
</script>

<style scoped>
/* 3 neat columns with even spacing */
.gallery-mode-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 24px;
  justify-items: center;
}

.gallery-mode-item {
  display: block;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.gallery-mode-item img {
  width: 550px;
  height: 450px; /* rectangle shape */
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.gallery-mode-item:hover {
  transform: scale(1.01);
}

/* Info section styling */
.info-section {
  margin-top: 3rem;
}

.info-section h2 {
  margin-bottom: 1rem;
}

.info-section ul {
  list-style: disc;
  padding-left: 1.5rem;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .gallery-mode-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery-mode-grid {
    grid-template-columns: 1fr;
  }

  .gallery-mode-item img {
    height: 220px;
    width: 350px;
  }
}

h1 {
  font-size: 2.5em;
  margin-top: 0;  
}
</style>