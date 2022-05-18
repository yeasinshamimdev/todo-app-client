import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList.js/ToDoList';
import Login from './components/Login/Login';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path='/' element={<RequireAuth>
          <ToDoList />
        </RequireAuth>} />
        <Route path='/todo' element={<RequireAuth>
          <ToDoList />
        </RequireAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
