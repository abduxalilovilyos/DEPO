import React from "react";

const TIRCard = ({
  tir_raqam,
  tir_olingansana,
  tir_berilishikksana,
  tir_berilgansana,
  tir_holati,
  tir_berilganmoshina,
  tir_qaytgansana
}) => {
  return (
    <div className="doc__cardtir tircontener__header">
      <div className="tirnomi">
        <h3>{tir_raqam}</h3>
      </div>
      <div className="tirholati">
        <h3>{tir_holati}</h3>
      </div>
      <div className="tirolingansana">
        <h3>{tir_olingansana}</h3>
      </div>
      <div className="tirberilishikksana">
        <h3>{tir_berilishikksana}</h3>
      </div>
      <div className="tirberilgansana">
        <h3>{tir_berilgansana}</h3>
      </div>
      <div className="tirqaytgansa">
        <h3>{tir_qaytgansana}</h3>
      </div>
      <div className="tirberilganmashina">
        <h3>{tir_berilganmoshina}</h3>
      </div>
      <div className="ozgartirish">
        <button>Ozgartirish</button>
      </div>

      {/* <div className="doc__texttir">
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
        <h3>Haydovchidan:</h3>
        <h3>{tir_holatihaydovchidan}</h3>
      </div>
      <div className="doc__texttir">
        <h3>Berilgan moshina:</h3>
        <h3>{tir_berilganmoshina}</h3>
      </div> */}
      {/* <button>O'zgartirish</button> */}
    </div>
  );
};

export default TIRCard;
