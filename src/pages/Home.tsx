import React from "react";
import Header from "../components/Header";
import ApplyBanner from "../components/ApplyBanner";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import WhyDecadev from "../components/WhyDecadev";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import DecadevsProfile from "../components/DecadevsProfile";
import Partners from "../components/Partners";
import Footer from "../components/footer";
import {IndexStyle} from "./style"

function Home() {
  return (
    <div>
      <IndexStyle>
        <Header />
        <Banner />
        <WhyDecadev />
        <HowItWorks />
        <About />
        <Testimonials />
        <DecadevsProfile />
        <Partners />
        <ApplyBanner />
        <Footer />
      </IndexStyle>
    </div>
  );
}

export default Home;
