import Header from "./header";
import Homepage from "./homePage";
import Aboutpage from "./aboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<Aboutpage />} />
        </Routes>
      </Router>
    </>
  );
}
