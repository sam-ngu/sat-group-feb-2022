import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import AppLayout from './layouts/AppLayout';
import Login from './pages/Login';


function App() {
  return (



    <div>
      <BrowserRouter>
        <AppLayout>
          <Routes>

            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />

          </Routes>
        </AppLayout>

      
      
      </BrowserRouter>





    </div>
  );
}

export default App;
