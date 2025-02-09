import './Login.css'
import { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email.trim() || !password.trim()) {
            alert("Todos los campos son obligatorios")
            return
        }

        if (password.length < 6) {
            alert("la contraseña debe tener al menos 6 caracteres")
            return
        }

        alert("Login exitoso")
        setEmail("")
        setPassword("")
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='box'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Ingresar correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='box'>
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingresar contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </section>
    )
}

export default LoginPage