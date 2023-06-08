import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from './components/organisme/Movie/Movie';
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <div>
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/all-movie' element={<Movie />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
