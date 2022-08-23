const GET_TODO = "GET_TODO"

const initialState = [ ]

export const todoReducer = (state=initialState, action) => { 

    switch(action.type){
        case GET_TODO:
            return action.payload 
        default:
            return state
    }
}

export const getTodo = (data) =>{
    return{
        type: GET_TODO,
        payload: data
    }
}