import './CardPizza.css'

const CardPizza = ({ img, name, ingredients, price }) => {
    return (
        <>
            <div className='card'>

                <img src={img} alt={name} />
                <h3>Pizza {name}</h3>
                <hr />
                
                <p>Ingredientes:</p>
                <p>🍕 {[ingredients]}</p>
                <hr />

                <h2>Precio: ${price.toLocaleString("es-CL")}</h2>
                <div className='buttons'>
                    <button className='ver-mas'>Ver Más👀</button>
                    <button className='añadir'>Añadir🛒</button>
                </div>

            </div>
        </>
    )
}

export default CardPizza