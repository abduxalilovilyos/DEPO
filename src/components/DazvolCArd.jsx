import React from 'react'

const DazvolCArd = ({dazvol_raqam,dazvol_olingansana,dazvol_berilishikksana,
    dazvol_berilgansana, dazvol_qaytgansana, dazvol_holati,dazvol_berilganmoshina, dazvol_davlat, dazvol_holatihaydovchi,dazvol_holatihaydovchidan}) => {
  return (
    <div className="dazvolbody__header">
          <div className="dazvolnomi font-black">
            <h3>{dazvol_raqam}</h3>
          </div>
          <div className="dazvolholati">
            <h3>{dazvol_holati}</h3>
          </div>
          <div className="dazvololingansana">
            <h3>{dazvol_olingansana}</h3>
          </div>
          <div className="dazvolberilishkksana">
            <h3>{dazvol_berilishikksana}</h3>
          </div>
          <div className="dazvolberilgansana">
            <h3>{dazvol_berilgansana}</h3>
          </div>
          <div className="dazvolqaytgansana">
            <h3>{dazvol_qaytgansana}</h3>
          </div>
          <div className="dazvodavlati">
            <h3>{dazvol_davlat}</h3>
          </div>
          <div className="dazvolberilganmashina">
            <h3>{dazvol_berilganmoshina}</h3>
          </div>
          <div className="dazvolozgarish">
            <h3>Озгарищ</h3>
          </div>
        </div>








    // <div className="doc__cardtir">
    //   <div className="doc__texttir">
    //     <h3>Dazvol raqami:</h3>
    //     <h3>{dazvol_raqam}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Olingan sana:</h3>
    //     <h3>{dazvol_olingansana}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Berilishi kerak sana:</h3>
    //     <h3>{dazvol_berilishikksana}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Berilgan sana:</h3>
    //     <h3>{dazvol_berilgansana}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Holati:</h3>
    //     <h3>{dazvol_holati}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Haydovchiga:</h3>
    //     <h3>{dazvol_holatihaydovchi}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Haydovchidan:</h3>
    //     <h3>{dazvol_holatihaydovchidan}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Davlar:</h3>
    //     <h3>{dazvol_davlat}</h3>
    //   </div>
    //   <div className="doc__texttir">
    //     <h3>Berilgan moshina:</h3>
    //     <h3>{dazvol_berilganmoshina}</h3>
    //   </div>
    //   <button>O'zgartirish</button>
    // </div>
  )
}

export default DazvolCArd