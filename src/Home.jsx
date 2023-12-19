import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "./context/UserContext"

const Home = () => {

    const {user,setUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
      localStorage.removeItem('user')
      setUser(null)
      navigate('/')
    }

    return <div>
      <br />
      {user?.user_name}
      <br />
      {
        user && <button onClick={handleLogOut}>Log out</button>
      }
      <br />
      <b>this is adminpanel</b>
    </div>
}

export default Home