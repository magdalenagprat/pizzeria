import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
//import RegisterPage from './components/Register/Register.jsx'
//import LoginPage from './components/Login/Login.jsx'
import Cart from './components/Cart/Cart.jsx'

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            {/*<RegisterPage />*/}
            {/*<LoginPage />*/}
            <Cart />
            <Footer />
        </>
    )
}

export default App