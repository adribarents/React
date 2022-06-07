import { render } from "react-dom";
import SearchParams from "./SearchParams";
import Peli from "./Peli";
import leviOVA from "./img/leviOVA.jpg";
import alienista from "./img/alienisa.png";
import theboys from "./img/theboys.jpg";
import sthings from "./img/SThings.jpg";
import { useState } from "react";

const INFO = [
  {
    titulo:"OVA LEVI", 
    imagen:leviOVA,
    año:"2020"
  },
  {
    titulo:"Stranger things", 
    imagen:sthings,
    año:"2020"
  },
  {
    titulo:"The boys", 
    imagen:theboys,
    año:"2020"
  }
  ,
  {
    titulo:"Alienistas", 
    imagen:alienista,
    año:"2020"
  }
]
const App = () => {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div className="app">
      <nav>
        <h1>PELIS!</h1>
      </nav>
      <input 
        onChange={e => setBusqueda(e.target.value)}
        value={busqueda}
        placeholder="Buscar peliculas"
      />
      <div className="grid">
        {
          INFO
            .filter(x => {
              const titulo = x.titulo.toLocaleLowerCase();
              return titulo.includes(busqueda.toLocaleLowerCase())
            })
            .map(x => (<Peli titulo={x.titulo} imagen={x.imagen} año={x.año}></Peli>))
        }
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
