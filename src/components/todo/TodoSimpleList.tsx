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
          <th>Ngày tạo</th>
          <th>Hạn kết thúc</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{index + 1}</td>
            <td>{todo.text}</td>
            <td>{new Date(todo.createdAt).toLocaleDateString('vi-VN')}</td>
            <td>{todo.deadline ? new Date(todo.deadline).toLocaleDateString('vi-VN') : 'Không có'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TodoSimpleList
