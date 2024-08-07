import AboutUs_Styles from '../styles/About_us.module.css'
import NavBar from '../components/menu'
import Planter_Image from '../assets/images/planter_img.png'
import Planter_Image2 from '../assets/images/planter_image2.jpg'
export const About_us = () => {
  return (
    <>
      <NavBar />
      <div className={AboutUs_Styles.Welcome_Image}>
        <h1>SMART CROPS</h1>
      </div>

      <div className={AboutUs_Styles.Information_container}>
        <div className={AboutUs_Styles.Image_container}>
          <img src={Planter_Image} alt="Image_crop" />
        </div>
        <div className={AboutUs_Styles.Text_container}>
          <p>El proyecto de materas inteligentes tiene como objetivo principal revolucionar la
            forma en que interactuamos con las plantas en entornos domésticos y urbanos. Estas
            materas están equipadas con tecnología avanzada que permite monitorear y gestionar de manera óptima las
            condiciones ambientales y el bienestar de las plantas.</p>
        </div>
      </div>


      <div className={AboutUs_Styles.Information_container}>
        <div className={AboutUs_Styles.Text_container}>
          <p>Utilizando sensores de humedad, luz y temperatura, las materas inteligentes proporcionan datos en
            tiempo real que ayudan a los usuarios a mantener un entorno ideal para el crecimiento y la salud
            de sus plantas. Además, mediante la integración con aplicaciones móviles y plataformas de Internet
            de las Cosas (IoT), los usuarios pueden recibir alertas y consejos personalizados para el cuidado
            de cada especie vegetal.</p>
        </div>
        <div className={AboutUs_Styles.Image_container}>
          <img src={Planter_Image2} alt="Image_crop" />
        </div>
      </div>

      <h1 className={AboutUs_Styles.ODS_Tittle}>ODS en SmartCrops</h1>

    </>
  )
}
