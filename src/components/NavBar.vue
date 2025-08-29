<template>
  <nav class="navbar">
     <router-link to="/" class="navname">HD Patios & Paving</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
  </nav>
</template>

<style>
.navname {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  text-decoration: none;      /* removes default underline */
  position: static;           /* prevents the ::after pseudo from affecting it */
}

.navname::after {
  content: none;              /* removes the hover/active underline */
}
.navbar {
  background: #e74c3c;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between; /* logo left, links right */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* company name */
.logo {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
}

/* nav links container */
.nav-links {
  display: flex;
  gap: 2rem;
}

/* links styling */
.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  transition: color 0.3s;
}

/* hover underline */
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

.nav-links a:hover::after {
  width: 100%;
}

/* active link underline */
.nav-links a.router-link-exact-active::after {
  width: 100%;
}
</style>
