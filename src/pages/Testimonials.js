import "../App.css";
import Header from "../components/Header";
import ApplyBanner from "../components/ApplyBanner";
import Footer from "../components/Footer";
import StudentMain from "../components/StudentMain";


function Testimonials() {
  return (
    <div>
      <Header />
      <StudentMain heading={"Student Testimonials"} />
      <ApplyBanner />
      <Footer />
    </div>
  );
}

export default Testimonials;
