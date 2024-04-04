import React from 'react'

function TodoList({ todos, setTodos, setEditTodo }) {
  const handleEditTodo = ({ id }) => {
    const neededEditTodo = todos.find(todo => todo.id === id)
    console.log("neededEditTodo", neededEditTodo)
    setEditTodo(neededEditTodo)
  }

  const handleDeleteTodo = ({ id }) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleChangeComplete = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      {
        todos.map(todo => {
          const { id, title, completed } = todo;
          console.log("completed", completed)
          return (
            <div key={id} className='' style={{
              display: 'flex',
              gap: 5,
              alignItems: 'center'
            }}>
              <input
                type='text'
                value={title}
                disabled={true}
              />
              <div>
                <input type="checkbox" checked={completed} onChange={handleChangeComplete} />
                <button onClick={() => handleEditTodo(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoList