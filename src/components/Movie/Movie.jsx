
const Movie = (props) => {  

    // props.useRef.click()
    return (
        <>
            this is Movie component : {props.movie} 
            <br />
            <input value={props.movie} type="text" onChange={(e) => props.setMovie(e.target.value)} />
            <br />
            <button onClick={() => props.handle()}>click me</button>
        </>
       
    )
}

export default Movie