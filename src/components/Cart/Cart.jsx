import { pizzaCart } from '../../pizzas.js'
import './Cart.css'

const Cart = () => {
    const calcularCart = (cart) => {
        return cart.reduce((total, producto) => {
            return total + producto.price * producto.count
        }, 0)
    }

    return (
        <div>
            <h3>Detalles del pedido:</h3>
            <ul>
                {pizzaCart.map((item) => (
                    <li key={item.id}>
                        <img src={item.img} alt={item.name} className='pizzaImg'/>
                        <p>{item.name}</p>
                        <p>${item.price.toLocaleString("es-CL")}</p>
                        <button>-</button>
                        <span>{item.count}</span>
                        <button>+</button>
                    </li>
                ))}
            </ul>
            <h1>Total: ${calcularCart(pizzaCart).toLocaleString("es-CL")}</h1>
            <button>Pagar</button>
        </div>
    )
}

export default Cart