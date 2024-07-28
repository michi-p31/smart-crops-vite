import PropTypes from "prop-types"; 
import { Link } from "react-router-dom";
import styles from "../styles/PlantCard.module.css";

const PlantCard = ({ planta, categoria }) => {
  const primeraPalabra = planta.name.split(" ")[0].toLowerCase();
  return (
    <div
      className={styles.cardCategoria}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${planta.image})`,
      }}
    >
      <h2>{planta.name}</h2>
      <Link to={`/categorias/${categoria}/${primeraPalabra}`}>Ver más</Link>
    </div>
  );
};

// Define los PropTypes para tu componente
PlantCard.propTypes = {
  planta: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  categoria: PropTypes.string.isRequired,
};

export default PlantCard;
