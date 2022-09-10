import './assets/scss/main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Category from './pages/Category';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Search from './pages/Search';
import Page404 from './pages/Page404';

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
            <li>
              <Link to="/detail/comic/123">comic</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div>
        <Routes>
          <Route exact path="/category" element={<Category/>} />
          <Route path="/search" element={<Search/>} />          
          <Route path="detail">
            <Route index element={<Page404/>} />
            <Route path="comic/:id" element={<Detail keyword={"comics"} params={useParams()}/>} />
            <Route path="character/:id" element={<Detail keyword={"characters"}/>} />
            <Route path="creator/:id" element={<Detail keyword={"creators"}/>} />
            <Route path="event/:id" element={<Detail keyword={"events"}/>} />
            <Route path="seri/:id" element={<Detail keyword={"series"}/>} />
            <Route path="story/:id" element={<Detail keyword={"stories"}/>} />
          </Route>
          <Route path="/" element={<Home/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
