import axios from "axios"
import { useContext, useState } from "react"
import { UserContext } from "./context/UserContext"
import { redirect, useNavigate } from "react-router-dom"

const User = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {user,setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const handleLogin = () => {
        setError('')
        axios.post('https://accounts.tnet.ge/api/ka/user/auth',{
            Email : email,
            Password : password,
        }).then((response) => {
            const userInfo = response.data?.data?.Data
            setUser(userInfo)
            localStorage.setItem('user',JSON.stringify(userInfo))
            navigate('/home')
        }).catch((e) => {
            setError(e.response?.data?.message?.error_data)
        })
    }


    return !user && <>
        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" />
        <br />
        <input type="password"  onChange={(e) => setPassword(e.target.value)}  name="password" placeholder="password" />
        <br />
        <button onClick={handleLogin}>Log In</button>
        <br />
        {JSON.stringify(error)}
    </>
}

export default User