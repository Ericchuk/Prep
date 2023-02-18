import Header from "./header";
import Homepage from "./homePage";
import Aboutpage from "./aboutPage";
import Donatepage from "./donatePage";
import Gallerypage from "./galllery";
import Projectpage from "./projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/donate" element={<Donatepage />} />
            <Route path="/gallery" element={<Gallerypage />} />
            <Route path="/projects" element={<Projectpage />} />
        </Routes>
      </Router>
    </>
  );
}
