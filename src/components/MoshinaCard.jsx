import React from 'react'

const MoshinaCard = ({moshina_rasm,moshina_nomi,moshina_raqam,tirkama_nomi,
tirkama_raqam, haydovchi,jami_TIR,TIR_kutulmoqda,TIR_songimuddat,jami_dazvol,dazvol_kutulmoqda,dazvol_songimuddat}) => {
  return (
    <div className="moshinalar__card">
        <div className="moshina__header">
          <img src={moshina_rasm} alt="carphoto" />
          <div className="moshina__text">
            <h1>{moshina_nomi}</h1>
            <div className="header__text">
              <h3>Davlat raqami:</h3>
              <h3>{moshina_raqam}</h3>
            </div>
            <div className="header__text">
              <h3>Tirkama rusumi:</h3>
              <h3>{tirkama_nomi}</h3>
            </div>
            <div className="header__text">
              <h3>Tirkama raqami:</h3>
              <h3>{tirkama_raqam}</h3>
            </div>
            <div className="header__text">
              <h3>{haydovchi}</h3>
            </div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="doc__contener">
        <div className="moshina__doc">
          <div className="doc__card">
            <h4>Jami TIR:</h4>
            <h4>{jami_TIR}</h4>
          </div>
          <div className="doc__card">
            <h4>Kutilmoqda:</h4>
            <h4>{TIR_kutulmoqda}</h4>
          </div>
          <div className="doc__card1">
            <h4>So'ngi muddat</h4>
            <h4>{TIR_songimuddat}</h4>
          </div>
        </div>

        <div className="moshina__doc">
          <div className="doc__card">
            <h4>Jami Dazvol:</h4>
            <h4>{jami_dazvol}</h4>
          </div>
          <div className="doc__card">
            <h4>Kutilmoqda:</h4>
            <h4>{dazvol_kutulmoqda}</h4>
          </div>
          <div className="doc__card1">
            <h4>So'ngi muddat</h4>
            <h4>{dazvol_songimuddat}</h4>
          </div>
        </div>



        </div>

        </div>
  )
}

export default MoshinaCard