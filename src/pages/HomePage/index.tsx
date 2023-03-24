import "./home.style.scss";
import Showcase from "../../components/sections/Showcase";
import Banner from "../../components/sections/Banner";
import About from "../../components/sections/About";
import Courses from "../../components/sections/Courses";
import Workers from "../../components/sections/Workers";
import Numbers from "../../components/sections/Numbers";
import News from "../../components/sections/News";
import Sertificates from "../../components/sections/Sertificates";
import Form from "../../components/sections/Form";

function HomePage() {
  return (
    <>
      <Showcase />
      <About style={{ padding: "150px 8% 190px" }} />
      <Banner />
      <Courses style={{ margin: "150px 0" }} />
      <Workers />
      <Numbers style={{ margin: "150px auto" }} />
      <News />
      <Sertificates style={{ margin: "150px 0" }} />
      <Form style={{ margin: "0 0 150px" }} />
    </>
  );
}

export default HomePage;
