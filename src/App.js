import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produts from './pages/Produts';
import Abaout from './pages/Abaout';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/produts' element={Produts} />
          <Route path='/abaout' element={Abaout} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
