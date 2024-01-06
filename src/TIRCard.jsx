import React from "react";

const TIRCard = ({tir_raqam,tir_olingansana,tir_berilishikksana,
tir_berilgansana,tir_holati,tir_berilganmoshina, tir_holatihaydovchi}) => {
  return (
    <div className="doc__cardtir">
      <div className="doc__texttir">
        <h3>TIR raqami:</h3>
        <h3>{tir_raqam}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Olingan sana:</h3>
        <h3>{tir_olingansana}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Berilishi kerak sana:</h3>
        <h3>{tir_berilishikksana}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Berilgan sana:</h3>
        <h3>{tir_berilgansana}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Holati:</h3>
        <h3>{tir_holati}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Haydovchiga:</h3>
        <h3>{tir_holatihaydovchi}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Berilgan moshina:</h3>
        <h3>{tir_berilganmoshina}</h3>
      </div>
      <button>O'zgartirish</button>
    </div>
  );
};

export default TIRCard;
