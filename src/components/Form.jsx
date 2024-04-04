import React, { useEffect } from 'react'
import { v4 } from 'uuid'

function Form({ input, setInput, todos, setTodos, editTodo, setEditTodo }) {

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleUpdateTodo = (title, id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })
    setTodos(updatedTodos)
    setEditTodo(null)
  }

  const handleAddTodo = () => {
    if (editTodo) {
      handleUpdateTodo(input, editTodo.id)
    } else {
      const newTodo = {
        id: v4(),
        title: input,
        completed: false,
      }
      console.log("newTodo", newTodo)
      setTodos([...todos, newTodo])
      setInput("")
    }
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  }, [editTodo])

  return (
    <div>
      <input
        type="text"
        placeholder='Enter a todo...'
        onChange={handleInputChange}
        value={input}
      />
      <button disabled={input === ""} onClick={handleAddTodo}>
        {
          editTodo ? "Edit" : "Add Todo"
        }
      </button>
    </div>
  )
}

export default Form;