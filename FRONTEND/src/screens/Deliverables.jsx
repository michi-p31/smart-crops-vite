import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/menu'
import Styles from '../styles/Deliverables.module.css'
export const Deliverables = () => {
  return (
    <>
        <NavBar />
        <Student Student_Name='Andres' date='21/21/21'/>
    </>
  )
}

const Student = ({Student_Name, date}) =>{
    return(
        <div className={Styles.Student}>
            <Link>
                <p>{Student_Name}</p>
                <p>Fecha de entrega: {date}</p>    
            </Link>
        </div>
    )
}
