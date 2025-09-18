import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
// import other pages if needed later

import HomeLayout from "./components/layouts/HomeLayout";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home page with its layout */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Other pages with main layout */}
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          {/* Add more pages here later when ready */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
