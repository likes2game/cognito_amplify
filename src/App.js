import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Phoenix from './pages/Phoenix';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <NavLink className="content" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="content" activeClassName="active" to="/about">About</NavLink>
          <NavLink className="content" activeClassName="active" to="/phoenix">Phoenix</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/phoenix" element={<Phoenix />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
