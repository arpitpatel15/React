import { useState } from 'react'
import AddTodo from './componants/AddTodo'
import Todos from './componants/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
