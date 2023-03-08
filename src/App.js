import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Car from "./pages/Car";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";
import createHashHistory from 'history/createHashHistory';

function App() {
  const vinCode = useSelector(state => state.vin.vin)
  const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
  return (
    <Router basename={process.env.PUBLIC_URL} history={hashHistory}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue/" element={<Catalogue />} />
          <Route path={"/catalogue/" + vinCode} element={<Car />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
