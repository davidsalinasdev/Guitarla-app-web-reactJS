# Curso de React 18

## Que son los componentes

1.- React utiliza componentes para la creacion de aplicaciones y sitios web.
2.- Un componente puede tener la extencion .jsx ó .tsx; .js tambien es posible, pero lo recomendado
son las dos primeras opciones.
3.- Un componente usualmente tiene 2 propositos: ser Re-utilizable ó separar la funcionalidad; si se cumples ambas
aun es mucho mejor.
4.- Un componente siempre tiene que tener un return() que es lo que se va a mostrar en pantalla.

## Reglas en JSX

1.- A diferencia de HTML, que no es estricto, en JSX si un elemento HTML tiene una etiqueta de apertura, deberas tener
tambien la de cierre.
2.- Las etiquetas de solo apertura como <link><img>o<input>deberan finalizar con />
3.- Cada componente debe tener un return.
4.- En este return debe haber maximo un solo elemento en el nivel máximo.(FRAGMENT)

## Catergorias de Hooks mas usados

1.- useState
2.- useEffect
3.- useContext

Que es el State en React

Resp.- Es la pieza clave central de React

Dependiendo de que son los datos se va a definir el valor inicial
(Sintaxis)

import { useState } from "react";

const [custumer, setCostumer] = useState({});
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);

## ANATOMIA de useState

1.- costumer(state): es la varible que va a tener toda la información
2.- setConstumer: es la funcion que modifica el costumer(state)
3.- ({}): se conoce como el valor inicial

const [custumer, setCostumer] = useState({});

React reacciona(en base al state)
Cada que tu State cambia, tu aplicacion de React va a renderizar y actualizarse con esos cambios, no es necesario hacer nada mas y tu interfaz siempre estara sincronizada con el state.

Para modificar el state, se utiliza la funcion que extraemos cuando declaramos el state en nuestro componente.
es decir:

import { useState } from "react";

1.- la función setCostumer() debes utilizar si se quiere modificar el state costumer
const [custumer, setCostumer] = useState({});

## Reglas De Los Hooks

1.- Los Hooks se colocan en la parte superior de tus componentes de react
2.- No se deben de colocar dentro de condicionales, tampoco despues de un return.

## El Hook useEffect

Es un Hook para diferentes escenarios(Despues del useState es el mas utilizado)

1.- useEffect siempre es un callback, que dependiendo como lo declares va a realizar diferentes acciones
2.- Es el sustituto de lo que antes era componentDidMount() y componentDidUpdate()
(Sintaxis)

import { useEffect } from "react";

useEffect( () => {

console.log('El componente esta listo');

},[]); // ([])-> se conoce como arreglo de dependencias

3.- Al ejecutarse automaticamente cuando el componete esta listo, es un buen lugar para colocar codigo para consultar una API o LocalStorage.

Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese campo suceda;

Y dependiendo del valor que pasemos en el array de dependencias(o no pasemos nada) el hook de useEffect hará algo diferente
(Sintaxis)

import { useEffect } from "react";

useEffect( () => {

console.log('El componente esta listo');

},[]); // ([])-> se conoce como arreglo de dependencias

import { useState, useEffect } from "react";

// Importaciones de componentes SIEMPRE con comillas dobles ("")
import Guitar from "./components/Guitar.jsx";
import Header from "./components/Header.jsx";

// Importando la base de datos interna
import { db } from "./data/db.js";

function App() {

console.log(db);

// Aqui se define el estado inicial de la aplicacion
const [auth, setAuth] = useState(false);
const [total, setTotal] = useState(0);
const [cart, setCart] = useState([]);

// useEffect es un Hook

useEffect(() => {

    if (auth) {
      console.log('Autenticado');
    }

}, [auth]); // Cada que cambiemos los valores del array de dependencias se ejecutara el useEffect

setTimeout(() => {
setAuth(true);
}, 3000);

// [] si se deja vacio, es que solo se ejecuta una vez(se ejecuta cuando el componente este listo)

## Que son los props?

1.- Los componentes de react utilizan props para comunicarse entre ellos.
2.- Puedes pasarle informacion de un componente padre al hijo por medio de estos props
3.- Los props se parecen a los atributos del html.
4.- Los props se pasan del padre al hijo, nunca se puede pasar del hijo al padre.

## Eventos en JSX

1.- La forma en que REACT maneja los eventos es muy similar a como lo hace javascript de forma nativa con algunos cambios.
2.- Los eventos son camelCase, es decir en lugar de onchange se usa onChange, en lugar de onclick se utiliza onClick
3.- Tambien a diferencia de JS y HTML, donde se coloca el nombre de la funcion es un string en React (JSX) se utiliza la funcion entre llaves{}
(sintaxis)

HTML
<button onclick="getLatesOrders()">
Descargar pedidos
</button>

JSX
<button onClick={getLatesOrders()}>
Descargar pedidos
</button>

HTML

<form onsubmit="agregarCliente() return false">
   <button type="submit">Submit</button>
</form>

JSX

<form onSubmit={handleSubmit}>
   <button type="submit">Añadir clientes</button>
</form>
