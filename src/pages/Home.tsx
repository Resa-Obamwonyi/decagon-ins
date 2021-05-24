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
import Footer from "../components/Footer/footer";
import styled from "styled-components";

const HomeStyle = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

@media (min-width: 768px) {
  max-width: 730px;
}

@media (min-width: 992px) {
  max-width: 940px;
}
@media (min-width: 1200px) {
  max-width: 1130px;
}
@media (min-width: 1360px) {
  max-width: 1500px;
}
`;

function Home() {
  return (
    <div>
      <Header />
      <HomeStyle>
        <Banner />
        <WhyDecadev />
        <HowItWorks />
        <About />
        <Testimonials />
        <DecadevsProfile />
        <Partners />
        <ApplyBanner />
        <Footer />
      </HomeStyle>
    </div>
  );
}

export default Home;
