<template>
  <section class="landing">
    <div class="hero">
      <div class="hero-content">
        <div>
          <h1>HD Patios & Paving</h1>
          <p>Transforming Outdoor Spaces with Precision and Care</p>
        </div>
        <div>
          <router-link to="/contact" class="cta-button">Get a Free Quote</router-link>
        </div>
      </div>
    </div>

    <div class="services">
      <router-link
        v-for="service in services"
        :key="service.title"
        :to="service.link"
        class="service-card"
      >
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      services: [
        {
          title: 'Patios & Paving',
          description: 'Create beautiful outdoor spaces with our patio and paving solutions.',
          link: '/services/patios',
        },
        {
          title: 'Stonework & Brickwork',
          description: 'Enhance your garden appeal with professionally installed slabwork, stonework or brickwork.',
          link: '/services/brickwork',
        },
        {
          title: 'Garden Makeovers',
          description: 'Transform your garden into a serene retreat with our makeover services.',
          link: '/services/landscaping',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
