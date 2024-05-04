

function Guitar({ guitar, addToCart }) {

    // Recibe datos del padre(App.jsx) un props, luego desestructuramos el props
    const { name, image, description, price } = guitar;

    // const handleClick = (guitar) => {

    //     // modificando el state setCard NOMUTA
    //     setCart([...cart, guitar]);
    // }

    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                <div className="col-4">
                    <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
                </div>
                <div className="col-8">
                    <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                    <p>{description}</p>
                    <p className="fw-black text-primary fs-3">${price}</p>
                    <button type="button"
                        className="btn btn-dark w-100"
                        // Cuando se manda elementos por parametros se tiene que colocar dentro de un arrow function.(Espera el evento)
                        onClick={() => addToCart(guitar)}// Seteando directamente el state.
                    >Agregar al Carrito</button>
                </div>
            </div>
        </>
    )
}

export default Guitar;