import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../stores/todoSlice'
import type { AppDispatch } from '../../stores'
import '../../CSS/componentcss/todo/TodoInput.css'
import Toast from '../../shared/Toast'

function TodoInput() {
  const [input, setInput] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [deadline, setDeadline] = useState('')

  const dispatch = useDispatch<AppDispatch>()

  const handleAdd = () => {
    if (!input.trim()) return
    dispatch(addTodo({ text: input.trim(), deadline }));
    setInput('')
    setSuccessMessage('Thêm công việc thành công!')
  }
  

  return (
    <div className="todo-input-wrapper">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Thêm công việc..."
        className="todo-input"
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="todo-deadline-input"
      />


      <button onClick={handleAdd} className="todo-button">
        Thêm
      </button>

      {successMessage && (
        <Toast message={successMessage} onClose={() => setSuccessMessage('')} />
      )}
    </div>
  )
}

export default TodoInput
