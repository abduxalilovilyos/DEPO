import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/BoshSahifa";
import Moshinalar from "./pages/moshinalar/Moshinalar";
import TIR from "./pages/TIR/TIR";
import Dazvol from "./pages/dazvol/Dazvol";
import Error from "./pages/Error";
import MoshinaQoshish from "./pages/moshinalar/MoshinaQoshish";
import TIRQoshish from "./pages/TIR/TIRQoshish";
import DazvolQoshish from "./pages/dazvol/DazvolQoshish";
import Login from "./pages/Login";
import MyContext from "./MyContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [access, setAccess] = useState("");
  const [cars, setCars] = useState(null);

  

  return (
    <MyContext.Provider value={{ access, setAccess, cars, setCars  }}>
      {/* {access && <Header />} */}
      <Routes>
        <Route
          path="/login"
          element={!access ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/"
          element={access ? <BoshSahifa /> : <Navigate to="/login" />}
        />
        <Route path="/moshinalar" element={<Moshinalar />} />
          <Route path="/moshinaqoshish" element={<MoshinaQoshish />} />
        <Route path="/tir" element={<TIR />} />
        <Route path="/dazvol" element={<Dazvol />} />
        <Route path="/tirqoshish" element={<TIRQoshish />} />
        <Route path="/dazvolqoshish" element={<DazvolQoshish />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {access && <Footer />}
    </MyContext.Provider>
  );
};

export default App;