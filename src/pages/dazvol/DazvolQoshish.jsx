import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const DazvolQoshish = () => {
  return (
    <>
    <Header />
    <div className='tirqoshish'>
        <div className="tirqoshish__card">
            <div className="savol">
                <label>TIR raqami:</label>
                <input type="text" />
            </div>
            <div className="savol">
                <label>Olingan sana:</label>
                <input type="date" />
            </div>
            <div className="savol">
                <label>Berilishi kerak sana:</label>
                <input type="date" />
            </div>
            <div className="savol">
                <label>Berilgan sana:</label>
                <input type="date" />
            </div>
            <div className="savol">
                <label>Holati</label>
                <select name="" id="">
                    <option value="Aktiv" key="">Aktiv</option>
                    <option value="Noaktiv" key="">Noaktiv</option>
                </select>
            </div>
            <div className="savol">
                <label>Davlat</label>
                <select name="" id="">
                    <option value="KZ" key="">KZ</option>
                    <option value="RUS" key="">RUS</option>
                </select>
            </div>
            <div className="savol">
                <label>Haydovchiga</label>
                <select name="" id="">
                    <option value="Berilmagan" key="">Berilmagan</option>
                    <option value="Berilgan" key="">Berilgan</option>
                </select>
            </div>
            <div className="savol">
                <label>Haydovchidan</label>
                <select name="" id="">
                    <option  key="">Qaytmagan</option>
                    <option  key="">Qaytgan</option>
                </select>
            </div>
            <div className="savol">
                <label>Berilgan haydovchi:</label>
                <input type="text" />
            </div>
            <button>Tayyor</button>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default DazvolQoshish