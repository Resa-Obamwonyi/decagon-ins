import "../App.css";
import Header from "../components/Header";
import StudentMain from "../components/StudentMain";
import ApplyBanner from "../components/ApplyBanner";
import ProgramBar from "../components/ProgramBar";
import Footer from "../components/Footer";

function Program() {
  return (
    <div>
      <Header />
      <StudentMain heading={"Learn. Explore. Discover."} />
      <ProgramBar />
      <ApplyBanner />
      <Footer />
    </div>
  );
}

export default Program;
