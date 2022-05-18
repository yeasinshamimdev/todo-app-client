import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDoList from './components/ToDoList.js/ToDoList';
import Login from './components/Login/Login';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<ToDoList />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
