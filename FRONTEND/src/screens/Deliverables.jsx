import React from 'react'
import NavBar from '../components/menu'
import Deliveravles_Styles from '../styles/Deliverables.module.css'

export const Deliverables = () => {
  return (
    <>
        <NavBar/>
        <h1 className={Deliveravles_Styles.Tittle}>Entregas</h1>
    </>
  )
}
