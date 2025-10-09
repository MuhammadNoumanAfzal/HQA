import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import HomeLayout from "./components/layouts/HomeLayout";
import MainLayout from "./components/layouts/MainLayout";
import Academics from "./pages/Academics";
import Enrollement from "./pages/Enrollement";
import PreSchool from "./pages/PreSchool";
import Tution from "./pages/Tution";
import Inquire from "./pages/Inquire";
import Faqs from "./pages/Faqs";
import Scholarship from "./pages/Scholarship";
import LeaderShip from "./pages/LeaderShip";
import Histroy from "./pages/Histroy";
import Memorization from "./pages/Memorization";
import MiddelSchool from "./pages/MiddelSchool";
import HighSchool from "./pages/HighSchool";
import Elementry from "./pages/Elementry";
import StudentLife from "./pages/StudentLife";
import Athelatics from "./pages/Athelatics";
import Faculty from "./pages/Faculty";
import Clubs from "./pages/Clubs";
import Alumni from "./pages/Alumni";
import Career from "./pages/Career";

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
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/enrollement" element={<Enrollement />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/tution-fee" element={<Tution />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/pre-school" element={<PreSchool />} />
          <Route path="/leadership" element={<LeaderShip />} />
          {/* <Route path="/histroy" element={<Histroy />} /> */}
          <Route path="/memorizaton" element={<Memorization />} />
          <Route path="/middel-school" element={<MiddelSchool />} />
          <Route path="/high-school" element={<HighSchool />} />
          <Route path="/elementry-school" element={<Elementry />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/athelatics" element={<Athelatics />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/clubs-and-organizations" element={<Clubs />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/career" element={<Career />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
