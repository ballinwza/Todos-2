import { useRef } from "react"
import { useDispatch } from 'react-redux';
import { updateData } from "../connect/connecter"
import {setInitial, updateTrig} from '../redux/triggerReducer'

export const TodoItem = ( {id,title,description, onClickDelete}) =>{
    const dispatch = useDispatch()
    const getUpdate = useRef("")
    
    return(
        <div key={id} className="todo">
            <div>icon</div>
            <div>{title}</div>
            <div>{description}</div>
            <div>date</div>
            <input ref={getUpdate} type="text"/>
            <button onClick={()=>{
                updateData(id, getUpdate.current.value)
                dispatch(updateTrig(true))
                setTimeout(() => {
                    dispatch(setInitial())
                }, 100);
            }}>Update</button>
            <button onClick={onClickDelete}>Delete</button>
        </div>
    )
}