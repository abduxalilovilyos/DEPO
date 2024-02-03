import React from "react";
import {Link} from "react-router-dom"
import MoshinaCard from "../../components/MoshinaCard";
import MyContext from "../../MyContext";
import { useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Moshinalar = () => {

  const {cars}= useContext(MyContext);


  return (
    <>
    <Header />
    <div className="moshinalar">
      <div className="moshinalar__header">
        <input type="text" placeholder="Haydovchining ism familiyasi" />
        <select>
          <option>Hammasi</option>
          <option>DAF</option>
          <option>MAN</option>
          <option>Mercedes Bens</option>
        </select>
        <Link to="/moshinaqoshish">
        <button>+</button>
        </Link>
      </div>
      <div className="clear"></div>

      <div className="moshinalar__body">
        <MoshinaCard
          moshina_rasm={"./images/carphoto.png"}
          moshina_nomi={"DAF"}
          moshina_raqam={"60 432 ABB"}
          tirkama_nomi={"KOGEL"}
          tirkama_raqam={"60 0983 OC"}
          haydovchi={"Andullayev Davron"}
          jami_TIR={12}
          TIR_kutulmoqda={2}
          TIR_songimuddat={"12/12/2024"}
          jami_dazvol={23}
          dazvol_kutulmoqda={3}
          dazvol_songimuddat={"12.12.2024"}
        />
          <MoshinaCard
          moshina_rasm={"./images/carphoto.png"}
          moshina_nomi={"DAF"}
          moshina_raqam={"60 432 ABB"}
          tirkama_nomi={"KOGEL"}
          tirkama_raqam={"60 0983 OC"}
          haydovchi={"Andullayev Davron"}
          jami_TIR={12}
          TIR_kutulmoqda={2}
          TIR_songimuddat={"12/12/2024"}
          jami_dazvol={23}
          dazvol_kutulmoqda={3}
          dazvol_songimuddat={"12.12.2024"}
        />
       
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Moshinalar;
