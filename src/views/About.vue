<template>
  <section class="about">
    <h2>About Us</h2>
    <p>
      At <strong>HD Landscaping</strong>, we believe your outdoor space should feel 
      like an extension of your home. For more than 15 years, we’ve been helping 
      homeowners and businesses bring their landscaping visions to life with a 
      perfect balance of creativity, functionality, and care.
    </p>
    <p>
      Whether you’re looking for a complete landscape design, seasonal 
      maintenance, or a fresh update to your yard, our dedicated team is here 
      to make it happen. We take pride in our attention to detail, reliable 
      service, and the long-lasting relationships we build with our clients.
    </p>
    <p>
      Want to see what we’ve been working on?  
      Visit our Facebook page to explore some of our latest projects and get inspired!
    </p>
    <p>
      <a 
        href="https://www.facebook.com/YourFacebookPage" 
        target="_blank" 
        rel="noopener noreferrer"
        class="facebook-link"
      >
        View Our Work on Facebook
      </a>
    </p>

    <!-- Meet the Team -->
    <div class="team">
      <h3>Meet the Team</h3>
      <div class="team-members">
        <div class="team-member">
          <img src="/public/hdlandscaping/Harry.jpg" alt="Portrait of Harry" />
          <h4>Harry</h4>
          <p>
            Harry brings years of design expertise to every project, 
            specializing in creating outdoor spaces that are both functional 
            and beautiful. His eye for detail ensures every client’s vision 
            comes to life.
          </p>
        </div>
        <div class="team-member">
          <img src="/public/hdlandscaping/Harry.jpg" alt="Portrait of Dan" />
          <h4>Dan</h4>
          <p>
            Dan leads our maintenance and installation teams with a strong 
            commitment to quality and care. He makes sure each project is 
            delivered on time and with lasting results.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.7;
  color: #333;
  text-align: center;
}

.about h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #e74c3c;
}

.about p {
  font-size: 1.15rem;
  margin-bottom: 1.25rem;
}

.facebook-link {
  display: inline-block;
  color: #fff;
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

/* Team Section */
.team {
  margin-top: 4rem;
}

.team h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.team-member {
  background: #f9f9f9;
  padding: 2rem 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 300px;
  text-align: center;
}

.team-member img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: 4px solid #e74c3c;
}

.team-member h4 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #e74c3c;
}

.team-member p {
  font-size: 1rem;
  color: #555;
}
</style>
