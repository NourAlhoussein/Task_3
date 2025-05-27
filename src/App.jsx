import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Academics from "./Pages/Academics";
import Admissions from "./Pages/Admissions";
import StudentLife from "./Pages/StudentLife";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/Academics" exact element={<Academics />} />
        <Route path="/Admissions" exact element={<Admissions />} />
        <Route path="/StudentLife" exact element={<StudentLife />} />
        <Route path="/Contact" exact element={<Contact />} />
      </Routes>
      <Footer
        logoName="Little Learner"
        email="hello@littlelearners.com"
        number="+91 91813 23 2309"
        address="Somewhere in the World"
      />
    </>
  );
}

export default App;
