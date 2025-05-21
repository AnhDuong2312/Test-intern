import { useSelector } from 'react-redux'
import type { RootState } from '../../stores'
import '../../CSS/componentcss/todo/TodoSimpleList.css'

function TodoSimpleList() {
  const todos = useSelector((state: RootState) => state.todos)

  return (
    <table className="simple-table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên công việc</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>{todo.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TodoSimpleList
