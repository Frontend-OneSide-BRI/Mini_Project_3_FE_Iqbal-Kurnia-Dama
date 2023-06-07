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
          <Route path='/detail' element={<Movie />} />
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
