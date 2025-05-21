import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo, updateTodo } from '../../stores/todoSlice'
import type { Todo } from '../../stores/todoSlice'
import type { AppDispatch } from '../../stores'
import Toast from '../../shared/Toast'
import '../../CSS/componentcss/todo/TodoItem.css'

interface TodoItemProps {
  todo: Todo
  index: number
}

function TodoItem({ todo, index }: TodoItemProps) {
  const dispatch = useDispatch<AppDispatch>()
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)
  const [successMessage, setSuccessMessage] = useState('')
  const [editDeadline, setEditDeadline] = useState(todo.deadline || '');

  const showToast = (message: string) => {
    setSuccessMessage(message)
    setTimeout(() => setSuccessMessage(''), 2000)
  }

  const handleUpdate = () => {
  if (!editText.trim()) return;
  dispatch(updateTodo({ id: todo.id, text: editText.trim(), deadline: editDeadline }));
  setEditing(false);
  showToast('Đã cập nhật công việc!');
};

  const handleDelete = () => {
    showToast('Đang xoá công việc!')
    setTimeout(() => {
      dispatch(deleteTodo(todo.id))
    }, 2000)
  }

  return (
    <>
      {successMessage && (
        <Toast message={successMessage} onClose={() => setSuccessMessage('')} />
      )}

      <tr>
        <td>{index + 1}</td>

        <td>
          {editing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="todo-edit-input"
            />
          ) : (
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
          )}
        </td>

        <td>{todo.createdAt ? new Date(todo.createdAt).toLocaleDateString() : '---'}</td>

        <td>
          {editing ? (
            <input
              type="date"
              value={editDeadline}
              onChange={(e) => setEditDeadline(e.target.value)}
              className="todo-edit-deadline"
            />
          ) : (
            todo.deadline ? new Date(todo.deadline).toLocaleDateString() : 'Không có'
          )}
        </td>


        <td>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
        </td>

        <td>
          {editing ? (
            <button onClick={handleUpdate} className="btn save">
              Lưu
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setEditing(true)
                  setEditText(todo.text)
                }}
                className="btn edit"
              >
                Sửa
              </button>
              <button onClick={handleDelete} className="btn delete">
                Xoá
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  )
}

export default TodoItem