import { Outlet } from "react-router-dom";
import Navbar from "../about/Navbar";
import Footer from "../home/Footer";

const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet /> {/* This is where About / Admission will render */}
    </main>
    <Footer />
  </>
);

export default MainLayout;
