import React, {useState} from 'react'
import Signup from './Signup'
export default function Login(props) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => setUser({...user, [e.target.name] : e.target.value})

    const submitUser = e => {
        e.preventDefault()
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(token => {
            if (token) {
                localStorage.setItem('snowmanToken', token.token)
                props.LoginUser()
            }
        })
    }

    return (
        <div>
        <Signup />
        <h3>Login</h3>
            <form onSubmit={submitUser}>
                <label >Username:</label>
                <input type="text" name="username" value={user.username} onChange={handleChange}/><br></br>
                <label >Password:</label>
                <input type="password" name="password" value={user.password} onChange={handleChange}/><br></br>
                <input type="submit" value="Submit"/>
            </form > 
        </div>
    )
}
