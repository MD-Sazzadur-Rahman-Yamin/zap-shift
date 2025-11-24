import React from "react";
import Banner from "../banner/banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurServices from "../OurServices/OurServices";
import Facility from "../Facility/Facility";
import FAQ from "../FAQ/FAQ";

const reviewsPromise = fetch("/reviews.json").then(res => res.json())

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <Facility></Facility>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
