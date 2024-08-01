import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CustomRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='flex  justify-between w-screen h-screen overflow-hidden'>
    <Navbar/>
    <div className='max-v-[1122px] mx-auto '>
    <CustomRoutes/>
    </div>
    </div>
  );
}

export default App;
