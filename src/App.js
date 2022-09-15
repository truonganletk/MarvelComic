import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';
import Characters from './pages/Characters';
import Comics from './pages/Comics';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/characters" element={<Characters/>} />
          <Route exact path="/comics" element={<Comics/>} />
          <Route path="/search" element={<Search/>} />    
          <Route path="/comic/:id" element={<Detail keyword={"comics"}/>} />
          <Route path="/character/:id" element={<Detail keyword={"characters"}/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
    </Router>
  );
}

export default App;
