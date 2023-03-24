import "./layout.style.scss";
import HomePage from "../../pages/HomePage";
import Footer from "../../components/sections/Footer";
import Navbar from "../../components/sections/Navbar";

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default AppLayout;
