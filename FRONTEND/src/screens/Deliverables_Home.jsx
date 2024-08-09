import React from 'react'
import NavBar from '../components/menu'
import Deliveravles_Styles from '../styles/Deliverables.module.css'
import { Link } from 'react-router-dom'

export const Deliverables_Home = () => {
    return (
        <>
            <NavBar />
            <h1 className={Deliveravles_Styles.Tittle}>Entregas</h1>
            <Week Week='Semana 1' link='Delivers/Week_1' />
            <Week Week='Semana 2' link='Delivers/Week_2' />
            <Week Week='Semana 3' link='Delivers/Week_3' />
            <Week Week='Semana 4' link='Delivers/Week_4' />
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