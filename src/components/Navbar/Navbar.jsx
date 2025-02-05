import './Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;
    return (
        <nav>
            <div className='navbar'>
                <h5>Pizerría Mamma Mia!</h5>
                <div className='buttons'>
                    <button>🍕Home</button>
                    {token ? <button>🔓Profile</button> : <button>🔐Register</button>}
                    {token ? <button>🔒Logout</button> : <button>🔐Login</button>}                    
                </div>
            </div>
            <button className='total'>🛒Total: ${total.toLocaleString("es-CL")}</button>
        </nav>
    )
}

export default Navbar