import './App.css';
import Header from './component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Checkout from './component/Checkout/Checkout';
import Blog from './component/Blog/Blog';
import About from './component/About/About';
import Login from './component/Auth/Login/Login';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
