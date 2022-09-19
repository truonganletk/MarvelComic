import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Comic from './pages/Comic';
import Home from './pages/Home';
import Search from './pages/Search';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
        <Routes>
          {/* <Route exact path="/characters" element={<Characters/>} /> */}
          <Route exact path="/comics" element={<Comics/>} />
          <Route path="/search" element={<Search/>} />    
          <Route path="/comic/:id" element={<Comic keyword={"comics"}/>} />
          <Route path="/character/:id" element={<Characters keyword={"characters"}/>} />
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Page404/>} />

        </Routes>
    </Router>
  );
}

export default App;
