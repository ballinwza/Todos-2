import { useRef } from "react"
import { useDispatch } from 'react-redux';
import { updateData } from "../connect/connecter"
import {setInitial, updateTrig} from '../redux/triggerReducer'

export const TodoItem = ( {id,title,description, onClickDelete, dateCreate, dateUpdate}) =>{
    const dispatch = useDispatch()
    const titleUpdate = useRef("")
    const descriptionUpdate = useRef("")
    
    return(
        <div key={id} className="todo"> 
            <div>
                <label htmlFor="title">Title:</label>
                <p name="title">{title}</p>
                <input ref={titleUpdate} type="text" placeholder="for title update"/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <p name="description">{description}</p>
                <input ref={descriptionUpdate} type="text" placeholder="for description update"/>
            </div>

            <div>
                <label htmlFor="createat">Created At:</label>
                <p name="createat">{dateCreate.toLocaleString('en-US')}</p> 
            </div> 

            <div>
                <label htmlFor="updateat">Updated At:</label>
                <p name="updateat">{dateUpdate.toLocaleString()}</p> 
            </div> 

            
            <button onClick={()=>{
                updateData(id, {
                    title: titleUpdate.current.value,
                    description: descriptionUpdate.current.value
                })
                dispatch(updateTrig(true))
                setTimeout(() => {
                    dispatch(setInitial())
                }, 100);
            }}>Update</button>
            <button onClick={onClickDelete}>Delete</button>
        </div>
    )
}