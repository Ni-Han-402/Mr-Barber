import './App.css';
import Header from './component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import About from './component/About/About';
import Login from './component/Auth/Login/Login';
import PackageDeatail from './component/PackageDetail/PackageDeatail';
import Register from './component/Auth/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/package/:packageId' element={<PackageDeatail></PackageDeatail>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
