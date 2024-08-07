import { useParams } from "react-router-dom";
import categoria_ from "./arr_cultivos";
import PlantCard from "./plantcard";
import styles from "../styles/Cultivos.module.css";

const Categoria = () => {
  const { categoria } = useParams();

  if (!categoria || !categoria_[categoria]) {
    return <p>No se encontraron plantas para la categoría seleccionada.</p>;
  }

  const planta = categoria_[categoria];

  return (
    <section className={styles.container}>
      <h1 className={styles.topCategorias}>{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
      <div className={styles.containerCategoria}>
        {planta.map((planta, index) => (
          <PlantCard key={index} planta={planta} categoria={categoria} />
        ))}
      </div>
    </section>
  );
};

export default Categoria;
