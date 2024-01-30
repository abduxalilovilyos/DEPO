import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import BoshSahifa from "./BoshSahifa";
import Moshinalar from "./Moshinalar";
import TIR from "./TIR";
import Dazvol from "./Dazvol";
import Eror from "./Eror";
import MoshinaQoshish from "./MoshinaQoshish";
import TIRQoshish from "./TIRQoshish";
import DazvolQoshish from "./DazvolQoshish";
import Login from "./Login";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="./images/logo.jpg" alt="logo" />
          <h1>DEPO</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li>
            <Link to="/Moshinalar">Moshinalar</Link>
          </li>
          <li>
            <Link to="/TIR">TIR</Link>
          </li>
          <li>
            <Link to="/Dazvol">Dazvol</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<BoshSahifa />} />
        <Route path="/Moshinalar" element={<Moshinalar />} />
        <Route path="/TIR" element={<TIR />} />
        <Route path="/Dazvol" element={<Dazvol />} />
        <Route path="/MoshinaQoshish" element={<MoshinaQoshish />} />
        <Route path="/TIRQoshish" element={<TIRQoshish />} />
        <Route path="/DazvolQoshish" element={<DazvolQoshish />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="*" element={<Eror />} />
      </Routes>
      <div className="footer">
        <div className="footer__logo">
          <h1>DEPO</h1>
          <p>
            Bizning maqsadimiz qulaylik yaratish va savdo biznesingizni
            oshirishga yordam berishdir.
          </p>
        </div>
        <ul>
          <li>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li>
            <Link to="/Moshinalar">Moshinalar</Link>
          </li>
          <li>
            <Link to="/TIR">TIR</Link>
          </li>
          <li>
            <Link to="/Dazvol">Dazvol</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
