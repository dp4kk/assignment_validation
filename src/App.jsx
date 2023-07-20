
import Homepage from './pages/Homepage'
import Appointment from './pages/Appointment'
import Confirm from './pages/Confirm'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/appointment" element={<Appointment/>}/>
      <Route path="/confirm" element={<Confirm/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
