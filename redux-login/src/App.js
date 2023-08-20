import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{textAlign:'center'}}>
    <h1 style={{margin: '50px'}} className='text-primary text-bold'>Flipbook</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
