
import './App.css'


function App() {
  return (
    <>
      <Todo title='Gym' description='Go to gym' status= {false} />
      <Todo title='Study' description='Go to study' status= {false} />
    </>
  )
}

interface TodoProps{
  title: string,
  description: string,
  status: boolean
}

function Todo(todo: TodoProps){
  return <>

    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>

  </>
}

export default App
