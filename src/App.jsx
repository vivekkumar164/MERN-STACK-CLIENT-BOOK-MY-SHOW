
import './App.css';
import {BrowserRouter , Routes,  Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';
import {useSelector} from 'react-redux';
import Admin from './pages/admin';
import Profile from './pages/profile';


function App() {

  const {loading} = useSelector((state) => state.loader)
  
  return (
    <div className="App">
      {loading && <div className='loader-container'> <div className="loader"></div> </div>}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path='/admin' element={<ProtectedRoute> <Admin /> </ProtectedRoute>} />
        <Route path='/profile' element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
