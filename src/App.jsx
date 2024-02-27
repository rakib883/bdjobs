import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className=''>
       <Header></Header>
       <Outlet></Outlet>
    </div>
  )
}

export default App
