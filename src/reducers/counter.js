const counterReducer = (state = 0,action) => {
    switch (action.type){
        case "INCREMENT":
            localStorage.setItem('count',state + action.payload)
            // return [...state,...action.payload]
            return state + action.payload
        case "DECREMENT":
            localStorage.setItem('count',state - action.payload)
            return state - action.payload
        default:
            return state
    }
  }

  export default counterReducer

