<template>
  <section class="contact">
    <h2>Contact Us</h2>
    <p class="intro">
      Have a question or want a free quote? Send us a message and we’ll get back to you promptly.
    </p>

    <!-- Contact Info -->
    <div class="contact-info">
      <p>📞 Phone: <a href="tel:07801269799">07801269799</a></p>
      <p>✉️ Email: <a href="mailto:hdpatiosandpaving@gmail.com">hdpatiosandpaving@gmail.com</a></p>
        <a 
          href="https://www.facebook.com/YourFacebookPage" 
          target="_blank" 
          rel="noopener noreferrer"
          class="facebook-link"
        >
          Contact us on Facebook
        </a>

    </div>
       


    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="contact-form">
      <input v-model="name" type="text" placeholder="Your Name" required />
      <input v-model="email" type="email" placeholder="Your Email" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>

    <p v-if="statusMessage" class="status">{{ statusMessage }}</p>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      statusMessage: ""
    };
  },
  methods: {
    submitForm() {
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      emailjs
        .send(
          "service_rjognxk",
          "template_hui2mln",
          templateParams,
          "Oyi-hM_FkSjiQUO-C"
        )
        .then(() => {
          this.statusMessage = "✅ Message sent! We'll get back to you soon.";
          this.name = "";
          this.email = "";
          this.message = "";
        })
        .catch(() => {
          this.statusMessage = "❌ Oops! Something went wrong. Please try again later.";
        });
    }
  }
};
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

/* Contact Info Section */
.contact-info {
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #333;
}

.contact-info p {
  margin: 0.5rem 0;
}

.contact-info a {
  color: #e74c3c;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-info a:hover {
  color: #ff6f61;
}

/* Contact Form */
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

/* Status Message */
.status {
  margin-top: 1rem;
  font-weight: bold;
  color: #2c3e50;
}

/* Responsive adjustments */
@media (max-width: 500px) {
  .contact {
    padding: 2rem 1rem;
  }
}

.facebook-link {
  display: inline-block;
  color: #fff !important;
  background-color: #4267B2;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.3s;
}

.facebook-link:hover {
  background-color: #365899;
  transform: translateY(-1px);
}

</style>
