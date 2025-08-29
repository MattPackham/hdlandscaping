<template>
  <section class="contact">
    <h2>Contact Us</h2>
    <p class="intro">Have a question or want a free quote? Send us a message and we’ll get back to you promptly.</p>
    <form @submit.prevent="submitForm" class="contact-form">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    submitForm() {
      alert(`Thanks, ${this.name}! We'll get back to you soon.`)
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 4rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  text-align: left;
}

.contact h2 {
  font-size: 2.5rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

.contact .intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #555;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input, textarea {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:focus, textarea:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 8px rgba(231, 76, 60, 0.3);
  outline: none;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 1rem;
  background: rgb(7, 88, 64);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
}

button:hover {
  background: rgb(4, 44, 30);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Responsive adjustments */
@media (max-width: 500px) {
  .contact {
    padding: 2rem 1rem;
  }
}
</style>
