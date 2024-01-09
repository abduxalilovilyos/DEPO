import React from "react";
import {Link} from 'react-router-dom'
import TIRCard from "./TIRCard";

const TIR = () => {
  return (
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
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />{" "}
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
        <TIRCard
          tir_raqam={"AA 0989876"}
          tir_berilgansana={"12.12.2023"}
          tir_olingansana={"12.13.2023"}
          tir_berilishikksana={"12.12.2025"}
          tir_holati={"Aktiv"}
          tir_holatihaydovchi={"Berilgan"}
          tir_berilganmoshina={"60 009 BAA"}
        />
      </div>
    </div>
  );
};

export default TIR;
