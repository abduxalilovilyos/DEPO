import React from "react";
import { Link } from "react-router-dom";
import TIRCard from "../../components/TIRCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const TIR = () => {
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
        <Link to="/TIRQoshish">
          <button>+</button>
        </Link>
      </div>
      <div className="clear"></div>

      <div className="tir__contener">
        <div className="tircontener__header">
          <div className="tirnomi">
            <h3>ТИР номи</h3>
          </div>
          <div className="tirholati">
            <h3>Холати</h3>
          </div>
          <div className="tirolingansana">
            <h3>Олинган сана</h3>
          </div>
          <div className="tirberilishikksana">
            <h3>Берилиши керак сана</h3>
          </div>
          <div className="tirberilgansana">
            <h3>Берилган сана</h3>
          </div>
          <div className="tirqaytgansa">
            <h3>Кайтган сана</h3>
          </div>
          <div className="tirberilganmashina">
            <h3>Берилган машина</h3>
          </div>
          <div className="ozgartirish">
            <h3>Озгартириш</h3>
          </div>
        </div>
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        <TIRCard
          tir_raqam={"AA 3214332"}
          tir_berilganmoshina={"60 400 ZAA"}
          tir_berilgansana={"12.12.2024"}
          tir_berilishikksana={"12"}
          tir_holati={"Aktiv"}
          tir_olingansana={"12.12.2024"}
          tir_qaytgansana={"12.12.2024"}
        />
        

        {/* <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_holatihaydovchidan={"Qaytmagan"}
          tir_berilganmoshina={"60 009 BAA"}
        /> */}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TIR;
