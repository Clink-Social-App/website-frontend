import React from 'react';
import WaitlistForm from '../../Components/WaitlistForm/WaitlistForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <section className="my-5">
          <h1>Welcome to Clink!</h1>
          <p className="lead">Your ultimate nightlife recommendation platform.</p>
          <img 
              src="./Images/LogoImage.jpg" 
              alt="Alexander Cole" 
              className="img-fluid mb-3 rounded-circle" 
              style={{ width: '400px', height: '400px', borderRadius: '100px' }}
          />    
        </section>

        <div className="row my-5">
          <div className="col-md-6">
            <section>
              <h2>Our Mission</h2>
              <p>
                At Clink, our mission is to enhance social experiences by providing an interface where 
                friends can connect, share, rate, and review their favorite bars.
              </p>
              <p>
                We aim to create a trusted community where artificial intelligence-driven recommendations 
                and personal insights from friends guide you to discover new venues and enjoy memorable nights out.
              </p>
              <p>
                Our goal is to empower users to make informed decisions about their nightlife choices, 
                fostering connections and creating a vibrant social network centered around shared experiences and local hotspots.
              </p>
            </section>
          </div>

          <div className="col-md-6">
            <section>
              <h2>The Problem & Solution</h2>
              <p>
                People often struggle to find great places to get a drink, whether they're locals or newcomers to a city. 
                They might know one or two good spots, but finding more can be challenging. Many of us rely on Google and 
                Yelp reviews, but from experience, these aren't always reliable as they don’t represent reviews from people similar to you.
              </p>
              <p>
                The general population is too broad to deliver a trustworthy review that suits your needs. 
                That's why we created Clink, a social media platform where friends can rate and share their experiences at bars. 
                We trust our friends' tastes and honest reviews, and Clink aims to solve the problem of not knowing where to enjoy 
                a drink or have a fun night out in a city. 
              </p>
              <p>
                Clink joins a reliable rating system with the social aspect of drinking, making the complete and most optimal 
                experience for its users.
              </p>
            </section>
          </div>
        </div>

        <section className="my-5 text-center">
          <h2>Join Our Waitlist</h2>
          <WaitlistForm />
        </section>
      </div>
    </div>
  );
};

export default Home;