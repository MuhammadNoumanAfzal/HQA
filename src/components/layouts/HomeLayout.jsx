import { Outlet } from "react-router-dom";
import NavbarLayout from "../home/NavbarLayout";
import Footer from "../home/Footer";
import MobileFooter from "./MobileFooter";

const HomeLayout = () => (
  <>
    <NavbarLayout />
    <main>
      <Outlet />
    </main>

    <div className="hidden md:block">
      <Footer />
    </div>
    <div className="block md:hidden">
      <MobileFooter />
    </div>
  </>
);

export default HomeLayout;
