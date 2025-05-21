import { useState } from 'react'
import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import TodoSimpleList from './components/todo/TodoSimpleList'
import Dashboard from './components/dashboard/Dashboard'
import './CSS/App.css'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddIcon from '@mui/icons-material/Add'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'


function App() {
  const [activeView, setActiveView] = useState('dashboard')

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="user-info">
          <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
          <span className="username">Xin chào, User</span>
        </div>
      </header>

      <div className="app-layout">
        <aside className="sidebar">
          <h2 className="sidebar-title"><MenuIcon /> Menu</h2>
          <ul>
            <li onClick={() => setActiveView('dashboard')}> <DashboardIcon />Dashboard</li>
            <li onClick={() => setActiveView('add')}> <AddIcon /> Thêm công việc</li>
            <li onClick={() => setActiveView('list')}><FormatListBulletedIcon /> Danh sách công việc</li>
          </ul>
        </aside>

        <main className="main-content">
          {activeView === 'dashboard' && <Dashboard />}
          {activeView === 'add' && (
            <>
              <div className='todoAdd-container'>
                <TodoInput />
                <TodoSimpleList />
              </div>
              
            </>
          )}
          {activeView === 'list' && <TodoList />}
        </main>
      </div>
    </div>
  )
}

export default App
