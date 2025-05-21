import { useState } from 'react'
import Dashboard from '../dashboard/Dashboard'
import TodoInput from '../todo/TodoInput'
import TodoList from '../todo/TodoList'

export default function MainLayout() {
  const [view, setView] = useState<'dashboard' | 'todo'>('dashboard');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <button
          onClick={() => setView('dashboard')}
          className={`block w-full text-left px-2 py-1 rounded ${
            view === 'dashboard' ? 'bg-gray-700' : ''
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setView('todo')}
          className={`block w-full text-left px-2 py-1 rounded ${
            view === 'todo' ? 'bg-gray-700' : ''
          }`}
        >
          Thêm công việc
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {view === 'dashboard' && <Dashboard />}
        {view === 'todo' && (
          <div className="max-w-2xl mx-auto">
            <TodoInput />
            <TodoList />
          </div>
        )}
      </main>
    </div>
  );
}
