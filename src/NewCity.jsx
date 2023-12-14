import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserContext } from "./context/UserContext"

const NewCity = () => {

  const {name,setName} = useContext(UserContext)

    return <div>
        <br />
        this is NewCity component : {name}
        <br />
        {/* <button onClick={() => setName(name + 1)}>
          increment
        </button> */}
    </div>
}

export default NewCity