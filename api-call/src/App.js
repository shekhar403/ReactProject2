
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import Home from './components/Home';
import Users from './components/Users';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-user' element={<CreateUser />} />
          <Route path='/users' element={<Users />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
