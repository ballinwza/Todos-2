import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './components/TodoItem';
import { getData, deleteData, addData} from './connect/connecter'
import {getTodo} from './redux/todoReducer'
import {addTrig, deleteTrig, setInitial} from './redux/triggerReducer'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function App() { 
  const dispatch = useDispatch()
  const todos = useSelector(state=>state.todos)
  const trigger = useSelector(state=>state.trigger)
  const getTitle = useRef("")
  const getDescription = useRef("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    if(todos.length === 0){
      getData(pushTodoRedux)
    }
  },[]) 

  useEffect(()=>{
    getData(pushTodoRedux)
    // if(!trigger.editTrigger && !trigger.deleteTrigger && !trigger.addTrigger){
    //   setTimeout(() => {
    //     dispatch(setInitial())
    //   }, 20);
    // }

  },[trigger])

  const pushTodoRedux = (data) =>{
    console.log("test", data)
    dispatch(getTodo([...data]))
  } 
  
  return (
    <div className="App">
      

      <div className='main-page'>
        {todos.length === 0 ? <div>Empty press 'Create' <br/> for add new todo</div> :
        todos.map((item, index)=>{
          return(
            <div key={index}>
              <TodoItem id={item._id} title={item.title} description={item.description}
              onClickDelete={()=>{
                deleteData(item._id)
                dispatch(deleteTrig(true))
                setTimeout(() => {
                  dispatch(setInitial())
                }, 100);
              }} 
              />
            </div>
          )
        })
        }

        <div>
          <button variant="primary" onClick={handleShow}>
            +Create
          </button>
        </div>
      </div>


      

      <Modal  show={show} onHide={handleClose} centered> 

      <Modal.Body>
        <div className=''>
          <input ref={getTitle} type="text" placeholder='title'/>
          <input ref={getDescription} type="text" placeholder='description'/>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={()=>{
          addData({title: getTitle.current.value, description: getDescription.current.value})
          dispatch(addTrig(true))
          setTimeout(() => {
            dispatch(setInitial())
            handleClose()
          }, 100);
        }}>Create</Button>
      </Modal.Footer>
    </Modal> 

    </div>
  );
}

export default App;
