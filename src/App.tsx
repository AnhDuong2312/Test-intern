import { useState } from 'react'
import Dashboard from './components/dashboard/Dashboard'

import TodoInput from './components/todo/TodoInput'
import TodoList from './components/todo/TodoList'
import TodoSimpleList from './components/todo/TodoSimpleList'
import './CSS/App.css'
import './CSS/Mode/dark.css'
import './CSS/Mode/light.css'
import MenuIcon from '@mui/icons-material/Menu'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddIcon from '@mui/icons-material/Add'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import type { SelectChangeEvent } from '@mui/material/Select'


function App() {
  const [activeView, setActiveView] = useState('dashboard')
  const [darkMode, setDarkMode] = useState('light')

  const toggleDarkMode = (e: SelectChangeEvent ) => {
  setDarkMode(e.target.value)
}


  return (
    <div className={`app-container ${darkMode}`}>
      <header className="app-header">
        <FormControl size="small" sx={{minWidth: '120px'}}>
        <InputLabel 
          id="label-select-dark-light-mode"
          sx={{
            color: 'white',
            '&.Mui-focused': {color: 'white'}
          }}
        >
          Mode
        </InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={darkMode}
          label="Mode"
          onChange={toggleDarkMode}
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': { borderColor: 'white'},
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white'},
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white'},
            '.MuiSvgIcon-root': { color: 'white'}
          }}
        >
          
          <MenuItem value="light">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
              <LightModeIcon fontSize='small' /> Light
            </Box>
          </MenuItem>
  
          <MenuItem value="dark">
            <Box style={{ display: 'flex', alignItems: 'center' , gap: '5px'}}>
              <DarkModeIcon  fontSize='small' /> Dark
            </Box>  
          </MenuItem>
            
        </Select>
      </FormControl>
        
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
