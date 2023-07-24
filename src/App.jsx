import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Content from './component/Content'

// import dummy from '@assets/todos.json'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')

  function searchTodo(value) {
    setSearch(value)
  }

  function pushTodos(text) {
    if (!text) {
      return toast.warn('Please input todo', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setTodos([...todos, {
      id: new Date().getTime(),
      text
    }])
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filter = !search ? todos : (
    todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <>
      <div className='container mx-auto py-10'>
        <ToastContainer />
        <Navbar searchTodo={searchTodo} />
        <Hero todos={todos} pushTodos={pushTodos} />
        <Content todos={filter} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App
