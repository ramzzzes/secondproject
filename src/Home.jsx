import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { UserContext } from "./context/UserContext"

const Home = () => {

    const {name,setName,age,setAge} = useContext(UserContext)


    return <div>
      <br />
      this is Home component :  {name}
      <br />
      <button onClick={() => setName(name + 1)}>
        increment
      </button>
 
    </div>
}

export default Home