import { pizzas } from '../../pizzas.js'

import './Home.css'
import CardPizza from '../CardPizza/CardPizza.jsx'
import Header from '../Header/Header.jsx'

const Home = () => {
    return (
        <>
            <Header />
            <div className='cards'>
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>
        </>
    )
}

export default Home