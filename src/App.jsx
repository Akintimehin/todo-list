import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
  const [InputText, setInput] = useState("")
  const [todo, setTodo]=useState([])

  function change(event) {
    setInput(event) 
  }

  function addTodo() {
    setTodo([...todo, InputText])
    setInput("") 
  }

  function editTodo(index) {
    let prompt = window.prompt("Edit Todo")
    let array = [...todo]
    array.splice(index, 1, prompt)
    setTodo([...array])
    
  }

  function deleteTodo(index) {
    let array = [...todo]
    array.splice(index, 1)
    setTodo([...array])
    
  }

  return (
    <>
      <Todo value={InputText} click={()=>addTodo()} onChange ={()=>change(event.target.value)} />
      {
        todo.map(()=>{
          return (<p>{items} <button onClick={()=>editTodo(index)}>Edit</button><button onClick={()=>deleteTodo(index)}>Delete</button></p>)
        })
      }
    </>
  )
}

export default App
