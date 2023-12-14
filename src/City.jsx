import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const City = () => {

    const params = useParams()
    const navigate = useNavigate()


    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //     },3000)
    // },[])

    return <>
        <h2>this is page of {params.city}</h2>
    </>
}

export default City