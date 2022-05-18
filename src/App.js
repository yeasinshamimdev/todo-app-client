import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList.js/ToDoList';
import Login from './components/Login/Login';
import Header from './components/Header';
import RequireAuth from './components/RequireAuth';

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
    </div>
  );
}

export default App;
