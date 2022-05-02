import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import Notfound from './Pages/NotFound/Notfound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
