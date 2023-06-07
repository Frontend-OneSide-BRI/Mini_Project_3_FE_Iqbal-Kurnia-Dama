import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from './components/movie';
import Home from "./pages/home";


function App() {
  return (
    <div>
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/all-movie' element={<Movie />} />
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
