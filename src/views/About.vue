<template>
  <section class="about">
    <h2>About Us</h2>
    <p>
      At HD Landscaping, we specialize in designing and maintaining
      stunning outdoor spaces. With over 15 years of experience, our team
      brings creativity, expertise, and care to every project.
    </p>
    <p>
      See some of our latest projects on our Facebook page!
    </p>
    <p>
      <a 
        href="https://www.facebook.com/YourFacebookPage" 
        target="_blank" 
        rel="noopener noreferrer"
        class="facebook-link"
      >
        Click here to visit our Facebook
      </a>
    </p>
  </section>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  text-align: center;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #e74c3c; /* red accent to match navbar */
}

.about p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.facebook-link {
  display: inline-block;
  color: #fff;
  background-color: #4267B2; /* Facebook blue */
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.3s;
}

.facebook-link:hover {
  background-color: #365899;
  transform: translateY(-2px);
}
</style>
