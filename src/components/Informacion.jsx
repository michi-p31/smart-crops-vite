import { useParams } from "react-router-dom";
import { frutas } from "./arr_info_plant";
import cientifico from "../assets/images/cientifico.png";
import germinar from "../assets/images/germina.png";
import cosechar from "../assets/images/cosechar.png";
import maceta from "../assets/images/maceta.png";
import sembrar from "../assets/images/sembrar.png";
import piso from "../assets/images/piso_termico.png";
import temp_max from "../assets/images/temperatura_max.png";
import tem_minima from "../assets/images/temperatura_media.png";
import riego from "../assets/images/riego.png";
import solar from "../assets/images/solar.png";
import altura from "../assets/images/altura_plantas.png";
import semilla from "../assets/images/semilla.png";
import suelo from "../assets/images/suelo.png";
import separacion from "../assets/images/separacion.png";
import ph from "../assets/images/ph.png";
import luna from "../assets/images/luna.png";
import styles from "../styles/informacion.module.css";

import NavBar from "../components/menu";

const Informacion = () => {
  const { nombreFruta } = useParams();
  const fruta = frutas.find((f) => f.nombre === nombreFruta);

  if (!fruta) {
    return <h1>Fruta no encontrada</h1>;
  }

  return (
    <div className={styles.informacionFruta}>
      <NavBar />
      <h1>{fruta.nombre}</h1>
      <div className={styles.info_panta}>
        <img
          src={fruta.imagen}
          alt={fruta.nombre}
          className={styles.imgPlanta}
        />
        <p>{fruta.descripcion}</p>
      </div>

      <h3 className={styles.info_cultivo}>Informacion del Cultivo</h3>

      <h4>Nombre del cultivo</h4>
      <p>{fruta.nombre}</p>

      <hr className={styles.separator} />

      <h4>Nombre Cientifico</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={cientifico}
          className={styles.imgInformacion}
          alt="Nombre Científico"
        />
        <p>{fruta.cientifico}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Tipo de cultivo</h4>
      <div className={styles.tipoCultivo}>
        <img
          src={fruta.cultivo}
          alt={fruta.Tipo_cultivo}
          className={styles.imgCultivo}
        />
        <p>{fruta.Tipo_cultivo}</p>
      </div>

      <hr className={styles.separator} />

      <h3>Cuando cultivar</h3>

      <h4>Germina en</h4>
      <div className={styles.parrafoInformacion}>
        <img src={germinar} className={styles.imgInformacion} alt="Germinar" />
        <p>{fruta.Germina}</p>
      </div>

      <hr className={styles.separator} />

      <div className={styles.parrafoInformacion}>
        <h4>Se puede Cosechar en</h4>
      </div>
      <div className={styles.parrafoInformacion}>
        <img src={cosechar} className={styles.imgInformacion} alt="Cosechar" />
        <p>{fruta.cosechar}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Siembra en Temporadas</h4>
      <p>{fruta.temporada}</p>

      <hr className={styles.separator} />

      <h3>Cómo cultivar</h3>

      <h4>Tamaño de la maceta</h4>
      <div className={styles.parrafoInformacion}>
        <img src={maceta} className={styles.imgInformacion} alt="Maceta" />
        <p>{fruta.maceta}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Transplantar a tierra</h4>
      <div className={styles.parrafoInformacion}>
        <img src={sembrar} className={styles.imgInformacion} alt="Sembrar" />
        <p>{fruta.tierrra}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Piso térmico</h4>
      <div className={styles.parrafoInformacion}>
        <img src={piso} className={styles.imgInformacion} alt="Piso térmico" />
        <p>{fruta.piso}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Temperatura máxima ideal</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={temp_max}
          className={styles.imgInformacion}
          alt="Temperatura máxima"
        />
        <p>{fruta.temp_max}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Temperatura mínima ideal</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={tem_minima}
          className={styles.imgInformacion}
          alt="Temperatura mínima"
        />
        <p>{fruta.temp_min}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Cantidad de riego</h4>
      <div className={styles.parrafoInformacion}>
        <img src={riego} className={styles.imgInformacion} alt="Riego" />
        <p>{fruta.riego}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Luz solar</h4>
      <div className={styles.parrafoInformacion}>
        <img src={solar} className={styles.imgInformacion} alt="Luz solar" />
        <p>{fruta.solar}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Altura máxima de la planta</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={altura}
          className={styles.imgInformacion}
          alt="Altura máxima"
        />
        <p>{fruta.altura}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Profundidad al sembrar la semilla</h4>
      <div className={styles.parrafoInformacion}>
        <img src={semilla} className={styles.imgInformacion} alt="Semilla" />
        <p>{fruta.profundidad}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Separación entre plantas</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={separacion}
          className={styles.imgInformacion}
          alt="Separación"
        />
        <p>{fruta.separacion}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Tipo de suelo</h4>
      <div className={styles.parrafoInformacion}>
        <img
          src={suelo}
          className={styles.imgInformacion}
          alt="Tipo de suelo"
        />
        <p>{fruta.tipo_suelo}</p>
      </div>

      <hr className={styles.separator} />

      <h4>PH del suelo</h4>
      <div className={styles.parrafoInformacion}>
        <img src={ph} className={styles.imgInformacion} alt="PH" />
        <p>{fruta.ph}</p>
      </div>

      <hr className={styles.separator} />

      <h4>Luna recomendada para sembrar</h4>
      <div className={styles.parrafoInformacion}>
        <img src={luna} className={styles.imgInformacion} alt="luna" />
        <p>{fruta.luna}</p>
      </div>
    </div>
  );
};

export default Informacion;
