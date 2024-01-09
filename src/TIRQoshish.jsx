import React from 'react'

const TIRQoshish = () => {
  return (
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
                <label>Haydovchiga</label>
                <select name="" id="">
                    <option value="Berilmagan" key="">Berilmagan</option>
                    <option value="Berilgan" key="">Berilgan</option>
                </select>
            </div>
            <div className="savol">
                <label>Berilgan haydovchi:</label>
                <input type="text" />
            </div>
            <button>Tayyor</button>
        </div>
    </div>
  )
}

export default TIRQoshish