// En SRC se estara escribiendo la mayor parte del codigo de la aplicacion
// Este es el componente principal de la aplicacion de REACT



import { useState, useEffect } from "react";


// Importaciones de componentes SIEMPRE con comillas dobles ("")
import Guitar from "./components/Guitar.jsx";
import Header from "./components/Header.jsx";

// Importando la base de datos interna
import { db } from "./data/db.js";



function App() {

  const [data, setData] = useState(db);

  return (
    <>

      {/* Renderizado de componente Header*/}
      <Header />
      {/* FIN Renderizado de componente Header*/}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">


          {/* Renderizado de componente Guitar*/}

          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
            />
          ))}

          {/* FIN Renderizado de componente Guitar*/}


        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>

    </>
  )
}

// Exportación por defecto
export default App;
