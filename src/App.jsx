import { Routes, Route, Outlet } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Banner />
      <NavBar />
      <Outlet />
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
