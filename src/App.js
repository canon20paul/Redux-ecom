import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import Additem from './Additem';
import Cart from './Cart';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <div className="App">
    <Navbar/>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/additem' element={<Additem />} />
          <Route path='/cart' element={<Cart />} />
      </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
