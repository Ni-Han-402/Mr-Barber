import './App.css';
import Header from './component/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
