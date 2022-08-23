const ADDED = "ADDED"
const DELETED = "DELETED"
const UPDATED = "UPDATED"
const INITIAL = "INITIAL"

const initialState = {
    editTrigger: false,
    deleteTrigger: false,
    addTrigger: false
}

export const TriggerReducer = (state=initialState, action) => { 

    switch(action.type){
        case ADDED:
            return {
                editTrigger: false,
                deleteTrigger: false,
                addTrigger: action.payload
            }
        case DELETED:
                return {
                    editTrigger: false,
                    deleteTrigger: action.payload,
                    addTrigger: false
                }
        case UPDATED:
            return {
                editTrigger: action.payload,
                deleteTrigger: false,
                addTrigger: false
            }
        case INITIAL:
            return {
                editTrigger: false,
                deleteTrigger: false,
                addTrigger: false
            }
        default:
            return state
    }
}

export const setInitial = () =>{
    return{
        type: INITIAL
    }
}
export const addTrig = (bool) =>{
    return{
        type: ADDED,
        payload: bool
    }
}

export const deleteTrig = (bool) =>{
    return{
        type: DELETED,
        payload: bool
    }
}

export const updateTrig = (bool) =>{
    return{
        type: UPDATED,
        payload: bool
    }
}