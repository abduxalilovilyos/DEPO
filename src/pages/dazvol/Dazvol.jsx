import React from "react";
import {Link} from "react-router-dom"
import DazvolCArd from "../../components/DazvolCArd";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Dazvol = () => {
  return (
    <>
    <Header />
    <div className="tir">
      <div className="tir__header">
        <input type="text" placeholder="TIR raqamini kiriting" />
        <select>
          <option value="" key="">
            Aktiv
          </option>
          <option value="" key="">
            Noaktiv
          </option>
        </select>
        <select name="" id="">
          <option value="" key="">
            Berilgan
          </option>
          <option value="" key="">
            Berilmagan
          </option>
        </select>
        <select>
          <option value="" key="">
            RUS
          </option>
          <option value="" key="">
            KZ
          </option>
          <option value="" key="">
            TR
          </option>
          <option value="" key="">
            AZ
          </option>
          <option value="" key="">
            KGZ
          </option>
          <option value="" key="">
            EUR
          </option>
        </select>
        <Link to="/DazvolQoshish">
          <button>+</button>
        </Link>
      </div>
      <div className="clear"></div>

      <div className="tir__contener">
        <div className="dazvolbody__header">
          <div className="dazvolnomi">
            <h3>Дазвол номи</h3>
          </div>
          <div className="dazvolholati">
            <h3>Холати</h3>
          </div>
          <div className="dazvololingansana">
            <h3>Олинган сана</h3>
          </div>
          <div className="dazvolberilishkksana">
            <h3>Берилиши керак сана</h3>
          </div>
          <div className="dazvolberilgansana">
            <h3>Берилган сана</h3>
          </div>
          <div className="dazvolqaytgansana">
            <h3>Кайтган сана</h3>
          </div>
          <div className="dazvodavlati">
            <h3>Давлати</h3>
          </div>
          <div className="dazvolberilganmashina">
            <h3>Берилган машина</h3>
          </div>
          <div className="dazvolozgarish">
            <h3>Озгарищ</h3>
          </div>
        </div>
        <DazvolCArd dazvol_raqam={"AS 1234321"} dazvol_holati={"Aktiv"} dazvol_olingansana={"12.12.2024"} dazvol_berilishikksana={"12.12.1221"} dazvol_berilgansana={"12.12.2023"} dazvol_qaytgansana={"12.12.2024"} dazvol_davlat={"RUS"} dazvol_berilganmoshina={"60 021 AAA"} />
        {/* <DazvolCArd
          dazvol_raqam={"AA 12343"}
          dazvol_berilganmoshina={"60 098 ASA"}
          dazvol_berilgansana={"12.12.2024"}
          dazvol_berilishikksana={"12.12.2025"}
          dazvol_davlat={"RUS"}
          dazvol_holati={"Noaktiv"}
          dazvol_olingansana={"12.12.2023"}
          dazvol_holatihaydovchi={"Berilgan"}
        /> */}
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Dazvol;
