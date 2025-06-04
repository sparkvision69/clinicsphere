'use client'
import { useState } from "react"


const Login = () => {
    const [email, setemail] = useState("admin@gmail.com")
    const [password, setpassword] = useState("admin123")

    const handlesubmit = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
            headers: {
                "Content-type": "Application/json",
            },
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        if (response.ok) {
            alert("success")
        }
        } catch (error) {
         console.error(error)   
        }
    }

    return (
        <div>
            <h6>
                Register
            </h6>
            <div>
                <input placeholder="enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                <input placeholder="enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
                <button onClick={handlesubmit}>sumit</button>
            </div>
        </div>
    )
}

export default Login