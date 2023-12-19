import { useContext, useEffect } from "react"
import { UserContext } from "./context/UserContext"

const Header = () => {

    const {user,setUser} = useContext(UserContext)
    const checkUser = () => {
    
        const userInfo = localStorage.getItem('user')
        
        if(userInfo){
            setUser(JSON.parse(userInfo))
        }
    }

    useEffect(() => {
        checkUser()
    },[])

    return <div>
        {user ? 'hello ' + user?.user_name + ' ' + user?.user_surname : 'You are guest'}
    </div>
}

export default Header