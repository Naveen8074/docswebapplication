import DoctorsDetails from './components/DoctorsDetails';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DocProfile from './components/DocProfile';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DoctorsDetails />} />
        <Route path='/profile/:id' element={<DocProfile />} />
        <Route path='/patient/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
