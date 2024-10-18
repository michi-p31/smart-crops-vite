import aceituna from '../assets/plantsimages/aceituna.png';
import agraz from '../assets/plantsimages/agraz.png';
import aguacate from '../assets/plantsimages/aguacate.png';
import albaricoque from '../assets/plantsimages/albaricoque.png';
import almendra from '../assets/plantsimages/almendra.png';
import araza from '../assets/plantsimages/araza.png';
import arandano from'../assets/plantsimages/arandano.png';
import banano from '../assets/plantsimages/banano.png';
import borojo from '../assets/plantsimages/borojo.png';
import cacao from '../assets/plantsimages/cacao.png';
import acelga from '../assets/plantsimages/acelga.png';
import ajo from '../assets/plantsimages/ajo.png';
import aji_jalapeño from '../assets/plantsimages/aji_jalapeño.png';
import alcachofa from '../assets/plantsimages/alcachofa.png';
import arracacha from '../assets/plantsimages/arracacha.png';
import arveja from '../assets/plantsimages/arveja.png';
import batata from '../assets/plantsimages/batata.png';
import berenjena from '../assets/plantsimages/berenjena.png';
import berro from '../assets/plantsimages/berro.png';
import brocoli from '../assets/plantsimages/brocoli.png';
import ajenjo from '../assets/plantsimages/ajenjo.png';
import albahaca from '../assets/plantsimages/albahaca.png';
import anamu from '../assets/plantsimages/anamu.png';
import anis from '../assets/plantsimages/anis.png';
import apio from '../assets/plantsimages/apio.png';
import arnica from '../assets/plantsimages/arnica.png';
import bergamota from '../assets/plantsimages/bergamota.png';
import boldo from '../assets/plantsimages/boldo.png';
import borraja from '../assets/plantsimages/borraja.png';
import calendula from '../assets/plantsimages/calendula.png';
import achira from '../assets/plantsimages/achira.png';
import agapanto from '../assets/plantsimages/agapanto.png';
import alcatraz from '../assets/plantsimages/alcatraz.png';
import alegria_g from '../assets/plantsimages/alegruia_guinea.png'
import amapola from '../assets/plantsimages/amapola.png';
import anturio from '../assets/plantsimages/anturio.png';
import anemona from '../assets/plantsimages/anemona.png';
import astilbe from '../assets/plantsimages/astilbe.png';
import astromelia from '../assets/plantsimages/astromelia.png';
import azalea from '../assets/plantsimages/azalea.png';
import ajendrea from "../assets/plantsimages/ajedra.png";
import ajonjoli from "../assets/plantsimages/ajonjoli.png";
import canela from "../assets/plantsimages/canela.png";
import cardomomo from "../assets/plantsimages/cardamomo.png";
import clavo from "../assets/plantsimages/clavo.png";
import comino from "../assets/plantsimages/comino.png";
import crucuma from "../assets/plantsimages/curcuma.png";
import jengibre from "../assets/plantsimages/jengibre.png";
import mostaza from "../assets/plantsimages/mostaza.png";
import pimienta_n from "../assets/plantsimages/pimienta_negra.png";
import wasabi from "../assets/plantsimages/wasabi.png";
import agave from '../assets/plantsimages/agave.png';
import agave_chato from '../assets/plantsimages/agave_chato.png';
import agave_maguey from '../assets/plantsimages/agave_maguey.png';
import aloe from '../assets/plantsimages/aloe_vera.png';
import aloe_tigre from '../assets/plantsimages/aloe_tigre.png';
import andromicho from '../assets/plantsimages/andromicho.png';
import arbol from '../assets/plantsimages/arbol.png';
import cactus_bola from '../assets/plantsimages/cactus_bola.png';
import cactus_estrella from '../assets/plantsimages/cactus_estrella.png';
import cebra_jardin from '../assets/plantsimages/cebra_jardin.png';

const categoria_= {
    frutales: [
      { name: "Aceituna", image: aceituna  },
      { name: "Agraz Silvestre", image: agraz },
      { name: "Aguacate o Palta", image: aguacate },
      { name: "Albaricoque", image: albaricoque },
      { name: "Almendra", image: almendra },
      { name: "Araza", image: araza},
      { name: "Arándano", image:  arandano},
      { name: "Banano", image:  banano},
      { name: "Borojó", image:  borojo},
      { name: "Cacao", image:  cacao},
 
    ],
    vegetales: [
      { name: "Acelga", image: acelga },
      { name: "Ajo", image: ajo},
      { name: "Aji Jalapeño", image: aji_jalapeño },
      { name: "Alcachofa", image:  alcachofa},
      { name: "Arracacha", image:  arracacha},
      { name: "Arveja", image:  arveja},
      { name: "Batata", image:  batata},
      { name: "Berenjena", image: berenjena },
      { name: "Berro de Jardin", image: berro },
      { name: "Brocoli", image:  brocoli},

    ],
    aromaticas: [
      {name:"Ajenjo", image: ajenjo},
      {name:'Albahaca', image: albahaca},
      {name:'Anamu', image:anamu},
      {name:'Anis', image:anis},
      {name:'Apio', image: apio},
      {name:'Arnica', image:arnica},
      {name:'Bergamota', image:bergamota},
      {name:'Boldo', image:boldo},
      {name:'Borraja', image:borraja},
      {name:'Calendula', image:calendula},
    ],
    flores: [
      {name: 'Achira', image: achira},
      {name: 'Agapanto', image:agapanto },
      {name: 'Alcatraz', image: alcatraz},
      {name: 'Alegria', image: alegria_g},
      {name: 'Amapola', image: amapola},
      {name: 'Anturio', image: anturio},
      {name: 'Anemona', image: anemona},
      {name: 'Astilbe', image: astilbe},
      {name: 'Astromelia', image: astromelia},
      {name: 'Azalea', image: azalea},
    ],
    especies: [
      {name: 'Ajendra', image:ajendrea },
      {name: 'Ajonjoli', image:ajonjoli },
      {name: 'Canela', image:canela },
      {name: 'Cardamomo', image: cardomomo},
      {name: 'Clavo', image:clavo },
      {name: 'Comino', image:comino },
      {name: 'Curcuma', image: crucuma},
      {name: 'Jengibre', image:jengibre },
      {name: 'Mostaza', image: mostaza},
      {name: 'Pimienta negra', image: pimienta_n},
      {name: 'Wasabi', image: wasabi},     
    ],
    suculentas: [
     {name: 'Agave' , image: agave},
     {name: 'Agave Chato' , image: agave_chato},
     {name: 'Agave Maguey' , image: agave_maguey},
     {name: 'Aloe Vera' , image: aloe},
     {name: 'Aloe Tigre' , image: aloe_tigre },
     {name: 'Andromicho' , image: andromicho },
     {name: 'Arbol de Abundacia' , image: arbol },
     {name: 'Cactus Bola' , image: cactus_bola},
     {name: 'Cactus Estrella' , image: cactus_estrella},
     {name: 'Cebra de Jardin' , image: cebra_jardin},

    ]
   
  };
  
  export default categoria_;
  