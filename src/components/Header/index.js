import { Link } from "react-router-dom";

const Header = () => {
  return (
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
          <Link to="/moshinalar">Moshinalar</Link>
        </li>
        <li>
          <Link to="/tir">TIR</Link>
        </li>
        <li>
          <Link to="/dazvol">Dazvol</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
