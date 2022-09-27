import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Comic from './pages/Comic';
import Home from './pages/Home';
import Search from './pages/Search';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Comics from './pages/Comics';
import Page404 from './pages/Page404';
import { useLayoutEffect } from 'react';


const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])
  return children
}

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/comics" element={<Comics />} />
          <Route path="/search" element={<Search />} />
          <Route path="/comic/:id" element={<Comic />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
