import { useState, useRef } from "react";
import PropTypes from "prop-types"; //importe la libreria para la validacion del compoente prop-types para OnImageUpload
import { FaPlus } from "react-icons/fa";
import styles from "../styles/Report_student.module.css"; 

const ImageUploader = ({ onImageUpload }) => {
  const [image, setImage] = useState("");
  const inputRef = useRef(null);//aqui se guarda la imagen en una URL y la se crea una Ref para el input de la imagen  

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];//aqui se obtiene el archivo subido
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageUpload(imageUrl); 
    }//aqui la imagen pasa a objeto para crear una URL, luego se actualiza el estado de la imagen con el URL
  };


  return (
    <div>
      <button
        className={styles.subir}
        type="button"
        onClick={handleImageClick}
      >
        <FaPlus />
      </button>
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      {image && (
        <img
          src={image}
          alt="Vista previa"
          className={styles.imagePreview} 
        />
      )}
    </div>
  );
};

// validacion para poder utilizar  prop-types que es un componente de validacion de datos
ImageUploader.propTypes = {
  onImageUpload: PropTypes.func.isRequired // aqui se requiere la funcion OnImageUpload
};

export default ImageUploader;
