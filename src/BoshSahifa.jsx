import React from 'react'
import TextElement from './TextElement'

const BoshSahifa = () => {
  return (
    <div className='boshsahifa' >
        <div className="tircard">
          <TextElement name='Jami TIR:' count='122' />
          <TextElement name='Aktiv:' count='122' />
          <TextElement name='Noaktiv:' count='122' />
          <TextElement name='Berilgan:' count='122' />
          <TextElement name='Berilmagan:' count='122' />
        </div>
        <div className="dazvolcard">
          <div className="dazvol__header">
            <h1>Dazvol</h1>
            <select>
              <option value="" key="">Hammasi</option>
              <option value="" key="">KZ</option>
              <option value="" key="">TR</option>
              <option value="" key="">Rus</option>
            </select>
          </div>
          <TextElement name='Jami Dazvol:' count='122' />
          <TextElement name='Aktiv:' count='122' />
          <TextElement name='Noaktiv:' count='122' />
          <TextElement name='Berilgan:' count='122' />
          <TextElement name='Berilmagan:' count='122' />
        </div>
    </div>
  )
}

export default BoshSahifa