import { useSelector } from 'react-redux';
import type { RootState } from '../../stores';
import TodoItem from './TodoItem';
import { useState } from 'react';
import '../../CSS/componentcss/todo/TodoList.css'

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-list-container">
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active-filter' : ''}>Tất cả</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active-filter' : ''}>Hoàn thành</button>
        <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active-filter' : ''}>Chưa hoàn thành</button>
      </div>

      <table className="todo-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Công việc</th>
            <th>Ngày tạo</th>
            <th>Hạn</th>
            <th>Hoàn thành</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.length === 0 ? (
            <tr><td colSpan={6} style={{ textAlign: 'center' }}>Không có công việc nào.</td></tr>
          ) : (
            filteredTodos.map((todo, index) => (
              <TodoItem key={todo.id} todo={todo} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
