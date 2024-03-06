'use client'
import React from 'react'

const Imprimer = () => {
  return (
    <div>
      <button type="button" onClick={window.print()}>imprimer liste</button>
    </div>
  )
}

export default Imprimer
