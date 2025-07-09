import React from "react";
import Navigation from "../partials/Navigation";
import Hero from "./hero/Hero";
import Features from "./features/Features";
import Testimonials from "./testimonials/Testimonials";
import Pricing from "./pricing/Pricing";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
