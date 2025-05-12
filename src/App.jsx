import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/navbar/navbar";
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
        <Route path="/Task_3/" exact element={<Home />} />
        <Route path="/Task_3/About" exact element={<About />} />
        <Route path="/Task_3/Academics" exact element={<Academics />} />
        <Route path="/Task_3/Admissions" exact element={<Admissions />} />
        <Route path="/Task_3/StudentLife" exact element={<StudentLife />} />
        <Route path="/Task_3/Contact" exact element={<Contact />} />
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
