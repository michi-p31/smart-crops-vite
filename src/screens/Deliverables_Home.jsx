import React from 'react'
import NavBar from '../components/menu'
import Deliveravles_Styles from '../styles/Deliverables.module.css'
import { Link } from 'react-router-dom'

export const Deliverables_Home = () => {
    return (
        <>
            <NavBar />
            <h1 className={Deliveravles_Styles.Tittle}>Entregas</h1>
            <Week Week='Semana 1' link='/ClassRoom_Teacher/Deliveravels/Week' />
            <Week Week='Semana 2' link='/ClassRoom_Teacher/Deliveravels/Week' />
            <Week Week='Semana 3' link='/ClassRoom_Teacher/Deliveravels/Week' />
            <Week Week='Semana 4' link='/ClassRoom_Teacher/Deliveravels/Week' />
        </>
    )
}

const Week = ({ Week, link }) => {
    return (
        <div className={Deliveravles_Styles.Week}>
            <Link to={link}>
                <p className={Deliveravles_Styles.Week_Number}>{Week}</p>
                <p className={Deliveravles_Styles.Emoji}>📅</p>
            </Link>
        </div>
    )
}