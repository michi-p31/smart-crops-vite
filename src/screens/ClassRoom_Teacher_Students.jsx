import React from 'react'
import NavBar from '../components/menu'
import Styles from '../styles/ClassRoom_Teacher_Students.module.css'

const Student = ({Student_Name}) => {
    return(
        <div className={Styles.Student}>
            <p>{Student_Name}</p>
        </div>
    )
}

export const ClassRoom_Teacher_Students = () => {
  return (
    <>
        <NavBar/>
        <h1 className={Styles.Tittle}>Estudiantes</h1>
        <Student Student_Name='Nicolas'/>
        <Student Student_Name='Michell'/>
        <Student Student_Name='Salomon'/>
        <Student Student_Name='Andres'/>
        <Student Student_Name='Pepe'/>
    </>
  )
}
