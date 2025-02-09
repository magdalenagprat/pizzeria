import Navbar from './components/Navbar/Navbar.jsx'
{/*import Home from './components/Home/Home.jsx'*/}
import Footer from './components/Footer/Footer.jsx'
import RegisterPage from './components/Register/Register.jsx'
import LoginPage from './components/Login/Login.jsx'

const App = () => {
    return (
        <>
            <Navbar />
            {/*<Home />*/}
            <RegisterPage />
            <LoginPage />
            <Footer />
        </>
    )
}

export default App