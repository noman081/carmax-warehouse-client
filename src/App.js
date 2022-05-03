import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddCar from './Pages/AddCar/AddCar';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/Login/SignIn/SignIn';
import ManageCar from './Pages/ManageCar/ManageCar';
import MyItems from './Pages/MyItems/MyItems';
import Notfound from './Pages/NotFound/Notfound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/car/add' element={
          <RequireAuth>
            <AddCar></AddCar>
          </RequireAuth>
        }>
        </Route>
        <Route path='/car/manage' element={
          <RequireAuth>
            <ManageCar></ManageCar>
          </RequireAuth>
        }>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
