import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Car from "./pages/Car";
import Catalogue from "./pages/Catalogue";
import Home from "./pages/Home";


function App() {
  const vinCode = useSelector(state => state.vin.vin)
  return (
    <Router basename={process.env.PUBLIC_URL} history={process.env.PUBLIC_URL}>
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
