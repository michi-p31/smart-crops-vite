import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import styles from "../styles/PlantCard.module.css";

const PlantCard = ({ planta, categoria }) => {
  // esto separa el nombre de la planta cuanto tiene mas de una palabra
  const palabras = planta.name.split(" ");
  
  // esto toma la primera y segunda palabra y las une con un guion bajo
  const primeraSegundaPalabra = palabras.slice(0, 2).join("_").toLowerCase();

  return (
    <div
      className={styles.cardCategoria}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${planta.image})`,
      }}
    >
      <h2>{planta.name}</h2>
      <Link to={`/categorias/${categoria}/${primeraSegundaPalabra}`}>Ver más</Link>
    </div>
  );
};

PlantCard.propTypes = {
  planta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  categoria: PropTypes.string.isRequired,
};

export default PlantCard;
