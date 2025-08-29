<template>
  <section class="contact">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send</button>
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

<style>
.contact {
  padding: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
input, textarea {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 0.75rem;
  background: #2a7b3f;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
