import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import DanceOptions from "./Pages/DanceOptions/DanceOptions";
import About from "./Pages/About/About";
import InstructorList from "./Pages/InstructorList/InstructorList";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<DanceOptions />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructors" element={<InstructorList />} />
      </Routes>
    </>
  );
}

export default App;
