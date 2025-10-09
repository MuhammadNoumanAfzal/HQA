import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../about/Navbar";
import Footer from "../home/Footer";
import RedFooter from "../inquire/RedFooter";
import MobileFooter from "./MobileFooter";

const MainLayout = () => {
  const location = useLocation();

  const redFooterRoutes = [
    "/enrollement",
    "/inquire",
    "/faqs",
    "/scholarship",
    "/pre-school",
    "/middel-school",

    "/high-school",
    "/elementry-school",
  ];

  const showRedFooter = redFooterRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        {showRedFooter ? <RedFooter /> : <Footer />}
      </div>

      {/* Mobile Footer */}
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  );
};

export default MainLayout;
