<template>
  <section class="landing">
    <div class="hero">
      <div class="hero-content">
        <div>
          <h1>HD Patio & Paving</h1>
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
          title: 'Patios & Decking',
          description: 'Create beautiful outdoor spaces with our patio and decking solutions.',
          link: '/services/patios',
        },
        {
          title: 'Fencing and Brickwork',
          description: 'Enhance your curb appeal with professionally installed fencing or brickwork.',
          link: '/services/fencing',
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
.services {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 50px 20px;
  flex-wrap: wrap;
}

.service-card {
  display: block; /* ensures the router-link behaves like a card */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 30%;
  padding: 20px;
  text-align: center;
  color: inherit; /* inherit text color */
  text-decoration: none; /* remove underline */
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.service-card h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

.service-card p {
  font-size: 1rem;
  margin: 10px 0;
}
</style>
