import './Register.css'
import { useState } from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            alert("Todos los campos son obligatorios")
            return
        }

        if (password.length < 6) {
            alert("la contraseña debe tener al menos 6 caracteres")
            return
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden")
            return
        }

        alert("Registro exitoso")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <section>
            <h1>Register</h1>
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
                <div className='box'>
                    <label htmlFor="confirmPassword">Confirmar contraseña</label>
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </section>
    )
}

export default RegisterPage