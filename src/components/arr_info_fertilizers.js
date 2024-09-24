import frutas from "../assets/images/frutas.png";
import compost from "../assets/images/compost.png";
import papa from "../assets/images/papa.png";
import huevo from "../assets/images/huevo.png";
import banano from "../assets/images/banano.png";
import lenteja from "../assets/images/lenteja.png";
import madera from "../assets/images/madera.png";
import harina from "../assets/images/harina.png";
import lombriz from "../assets/images/lombriz.png";
import hierbas from "../assets/images/hierbas.png";
import ortiga from "../assets/images/ortiga.png";
import cafe from "../assets/images/cafe.png";
import purin from "../assets/images/purin.png";
import estiercol from "../assets/images/estiercol.png";
export const infoAbonos = [
    { 
        nombre: 'Abono de Frutas',
        imagen : frutas, 
        nombre_url: 'abono_frutas', 
        descripcion: 'El abono de frutas es excelente para aportar potasio y otros nutrientes esenciales a tus plantas.',
        materiales: 'Frutas en descomposición, agua',
        preparacion: 'Triturar las frutas y dejarlas fermentar durante 1-2 semanas en un recipiente con agua. Filtrar antes de usar.',
        usos: 'Aplicar directamente en la base de las plantas o diluir en agua para riego.',
      },
      { 
        nombre: 'Compost', 
        imagen: compost,
        nombre_url: 'compost', 
        descripcion: 'El compost es un fertilizante orgánico producido por la descomposición de materia orgánica.',
        materiales: 'Residuos vegetales, estiércol, restos de comida, hojas secas',
        preparacion: 'Mezclar los materiales en una pila o compostador, mantenerlo húmedo y voltearlo cada semana durante 2-3 meses.',
        usos: 'Mejorar la estructura del suelo, añadir nutrientes a huertos y jardines.',
      },
      { 
        nombre: 'Cáscara de Papa', 
        imagen: papa,
        nombre_url: 'cascara_papa', 
        descripcion: 'Las cáscaras de papa son una fuente rica de potasio y otros minerales para las plantas.',
        materiales: 'Cáscaras de papa',
        preparacion: 'Dejar secar las cáscaras y triturarlas para hacer polvo, o hervirlas y usar el agua resultante como fertilizante líquido.',
        usos: 'Aplicar alrededor de las plantas para mejorar el crecimiento y la resistencia a enfermedades.',
      },
      { 
        nombre: 'Cáscara de Huevo', 
        imagen: huevo,
        nombre_url: 'cascara_huevo', 
        descripcion: 'Las cáscaras de huevo aportan calcio y ayudan a reducir la acidez del suelo.',
        materiales: 'Cáscaras de huevo',
        preparacion: 'Secar y triturar las cáscaras de huevo hasta obtener un polvo fino.',
        usos: 'Espolvorear alrededor de las plantas para mejorar la absorción de nutrientes y prevenir plagas.',
      },
      { 
        nombre: 'Cáscara de Plátano', 
        imagen: banano,
        nombre_url: 'cascara_platano', 
        descripcion: 'La cáscara de plátano es rica en potasio, ideal para flores y frutas.',
        materiales: 'Cáscaras de plátano',
        preparacion: 'Cortar las cáscaras en trozos pequeños y enterrarlas alrededor de las plantas, o hacer té de cáscara de plátano.',
        usos: 'Fertilizar plantas con flores y frutales, mejorar el desarrollo de las raíces.',
      },
      { 
        nombre: 'Enraizante de Lenteja', 
        imagen: lenteja,
        nombre_url: 'enraizante_lenteja', 
        descripcion: 'El enraizante de lenteja promueve el desarrollo de raíces en esquejes y nuevas plantas.',
        materiales: 'Lentejas, agua',
        preparacion: 'Remojar las lentejas durante 24 horas, licuar y colar la mezcla. Utilizar el líquido como enraizante.',
        usos: 'Aplicar en esquejes o trasplantes para fomentar el desarrollo de raíces.',
      },
      { 
        nombre: 'Fertilizante de Cenizas de Madera', 
        imagen: madera,
        nombre_url: 'cenizas_madera', 
        descripcion: 'Las cenizas de madera son una excelente fuente de potasio y calcio para el suelo.',
        materiales: 'Cenizas de madera no tratada',
        preparacion: 'Recolectar las cenizas de madera y almacenarlas en un lugar seco.',
        usos: 'Espolvorear sobre el suelo para mejorar el pH y añadir nutrientes.',
      },
      { 
        nombre: 'Fertilizante de Harinas de Roca', 
        imagen: harina,
        nombre_url: 'harina_roca', 
        descripcion: 'Las harinas de roca son ricas en minerales que mejoran la fertilidad del suelo a largo plazo.',
        materiales: 'Harina de roca (basalto, granito, etc.)',
        preparacion: 'Mezclar la harina de roca con compost o directamente con el suelo.',
        usos: 'Aplicar en suelos pobres para aumentar su contenido mineral y mejorar el crecimiento de las plantas.',
      },
      { 
        nombre: 'Humus de Lombriz', 
        imagen: lombriz,
        nombre_url: 'humus_lombriz', 
        descripcion: 'El humus de lombriz es uno de los mejores fertilizantes naturales, rico en nutrientes.',
        materiales: 'Lombrices rojas californianas, residuos orgánicos',
        preparacion: 'Alimentar a las lombrices con restos orgánicos y recoger el humus resultante después de 2-3 meses.',
        usos: 'Mezclar con el suelo o aplicar directamente en las plantas para mejorar su crecimiento.',
      },
      { 
        nombre: 'Purin de Hierbas', 
        imagen: purin,
        nombre_url: 'purin_hierbas', 
        descripcion: 'El purin de hierbas es un fertilizante líquido que también ayuda a repeler plagas.',
        materiales: 'Hierbas frescas (como ortiga o consuelda), agua',
        preparacion: 'Fermentar las hierbas en agua durante 2 semanas. Filtrar antes de usar.',
        usos: 'Diluir y usar como fertilizante foliar o de suelo para estimular el crecimiento.',
      },
      { 
        nombre: 'Purin de Ortiga', 
        imagen: ortiga,
        nombre_url: 'purin_ortiga', 
        descripcion: 'El purin de ortiga es un excelente fertilizante que también combate plagas y hongos.',
        materiales: 'Ortigas frescas, agua',
        preparacion: 'Fermentar ortigas en agua durante 10-14 días, removiendo ocasionalmente.',
        usos: 'Diluir en agua y rociar sobre las plantas o el suelo para fortalecerlas y combatir plagas.',
      },
      { 
        nombre: 'Recortes de Hierbas', 
        imagen: hierbas,
        nombre_url: 'recortes_hierbas', 
        descripcion: 'Los recortes de hierbas son un fertilizante verde que enriquece el suelo rápidamente.',
        materiales: 'Recortes frescos de hierba',
        preparacion: 'Distribuir los recortes en la superficie del suelo como mulch o compostarlos.',
        usos: 'Mejorar la estructura del suelo y añadir materia orgánica.',
      },
      { 
        nombre: 'Restos de Café', 
        imagen: cafe,
        nombre_url: 'restos_cafe', 
        descripcion: 'Los restos de café aportan nitrógeno al suelo y mejoran la textura del mismo.',
        materiales: 'Café usado',
        preparacion: 'Esparcir los restos de café alrededor de las plantas o añadirlos al compost.',
        usos: 'Fertilizar plantas que prefieren suelos ácidos, como azaleas o arándanos.',
      },
      { 
        nombre: 'Té de Estiércol', 
        imagen: estiercol,
        nombre_url: 'te_estiercol', 
        descripcion: 'El té de estiércol es un fertilizante líquido rico en nitrógeno y otros nutrientes.',
        materiales: 'Estiércol de vaca, agua',
        preparacion: 'Sumergir estiércol en agua durante una semana, luego colar el líquido para usarlo.',
        usos: 'Diluir el té en agua y usarlo como fertilizante líquido en el suelo o en las plantas.',
      },
]