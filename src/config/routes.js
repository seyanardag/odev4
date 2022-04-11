import { Routes, Route } from "react-router-dom";
import AboutUs from "../webpages/AboutUs";
import Bireysel from "../webpages/Bireysel";
import Candidates from "../webpages/Candidates";
import Home from "../webpages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/candidates" element={<Candidates />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/candidates/:candidatesName" element={<Bireysel />} />

      <Route
        path="*"
        element={
          <h1>
            There's nothing here!
            <br />
            <b>404 Not Found!</b>
          </h1>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
