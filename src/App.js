import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
        <Routes>
          <Route exact path="/category" element={<Category/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
