import { Outlet } from "react-router-dom";
import NavbarLayout from "../home/NavbarLayout";
import Footer from "../home/Footer";

const HomeLayout = () => (
  <>
    <NavbarLayout />
    <main>
      <Outlet /> {/* This is where Home page will render */}
    </main>
    <Footer />
  </>
);

export default HomeLayout;
