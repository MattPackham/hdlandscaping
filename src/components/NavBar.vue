<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact Us</router-link>
  </nav>
</template>

<style>
.navbar {
  background: #2a7b3f;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>
