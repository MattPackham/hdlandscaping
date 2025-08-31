<template>
  <nav class="navbar">
    <router-link to="/" class="navname">HD Patios & Paving</router-link>

    <!-- Hamburger for mobile -->
    <button class="nav-toggle" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div :class="['nav-links', { open: isOpen }]">
      <router-link to="/" @click.native="closeMenu">Home</router-link>
      <router-link to="/about" @click.native="closeMenu">About</router-link>
      <router-link to="/contact" @click.native="closeMenu">Contact Us</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
};
</script>

<style scoped>
.navname {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;
  position: static;
}

.navname::after {
  content: none;
}

.navbar {
  background: #e74c3c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
}

.nav-links a:hover::after,
.nav-links a.router-link-exact-active::after {
  width: 100%;
}

/* Hamburger button */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 2px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background: #e74c3c;
    flex-direction: column;
    width: 200px;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
