'use client'
import { useState } from "react"


const Register = () => {
    const [username, setusername] = useState("admin")
    const [email, setemail] = useState("admin@gmail.com")
    const [password, setpassword] = useState("admin123")

    const handlesubmit = async () => {
        try {
            const response = await fetch("http://localhost:8080/auth/register", {
            headers: {
                "Content-type": "Application/json",
            },
            method: "POST",
            body: JSON.stringify({
                name: username,
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
                <input placeholder="enter username" value={username} onChange={(e) => setusername(e.target.value)} />
                <input placeholder="enter email" value={email} onChange={(e) => setemail(e.target.value)} />
                <input placeholder="enter password" value={password} onChange={(e) => setpassword(e.target.value)} />
                <button onClick={handlesubmit}>sumit</button>
            </div>
        </div>
    )
}

export default Register