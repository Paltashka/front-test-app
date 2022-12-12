import './App.css';
import Authentication from './pages/authenticationPage';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/homePage';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/auth' element={<Authentication/>} />
      <Route path='/' element={<Home/>} />
    </Routes>

    </div>  
  );
}

export default App;
