import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <h1>DEPO</h1>
        <p>
          Bizning maqsadimiz qulaylik yaratish va savdo biznesingizni oshirishga
          yordam berishdir.
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
  );
};

export default Footer;
