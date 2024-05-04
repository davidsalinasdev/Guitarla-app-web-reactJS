// En SRC se estara escribiendo la mayor parte del codigo de la aplicacion
// Este es el componente principal de la aplicacion de REACT

import { useState, useEffect } from "react";


// Importaciones de componentes SIEMPRE con comillas dobles ("")
import Guitar from "./components/Guitar.jsx";
import Header from "./components/Header.jsx";

// Importando la base de datos interna
import { db } from "./data/db.js";

function App() { // El state es inmutable

  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  // Todo lo que esta en llaves es el contenido de este componente App
  const [data] = useState(db);

  // Para llenar el carrito de compras
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEM = 5;
  const MIN_ITEM = 1;

  // Cada vez que cambie el estado de cart se guardara en localStorage con useEffect
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  // Función intermedia mas descriptiva que agrega al carrito
  function addToCart(item) {

    const itemExists = cart.findIndex(guitar => guitar.id === item.id);

    if (itemExists >= 0) { // Si existe devuelve la pocision

      const updatedCart = [...cart]; // Tomamos un copia
      updatedCart[itemExists].quantity++; // Realizo los cambios
      setCart(updatedCart); // y luego se setea el state

    } else { // Si no existe devuelve -1
      item.quantity = 1;
      setCart([...cart, item]);
    }

  }

  // Remover Items del carrito de compra
  function removeFromCart(id) {

    // Array methoth filter que NOMUTA el state
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id)); // Filtramos todos los elementos que no sean iguales

  }


  // Imcrementar cantidad de items en el carrito
  function increaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEM) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    })
    setCart(updatedCart);
  }

  // Decrementar cantidad de items en el carrito
  function decrementQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
    setCart(updatedCart);
  }


  // Vaciar el carrito
  function clearCart() {
    setCart([]);
  }

  return (
    <>

      {/* Renderizado de componente Header*/}
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decrementQuantity={decrementQuantity}
        clearCart={clearCart}
      />
      {/* FIN Renderizado de componente Header*/}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">


          {/* Renderizado de componente Guitar*/}

          {data.map(guitar => (
            // Manda las variables props al hijo(Guitar.jsx)
            <Guitar
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              addToCart={addToCart}
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
