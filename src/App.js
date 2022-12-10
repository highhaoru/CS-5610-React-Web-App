import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="container mt-4 mb-4">
          <Routes>
            <Route path="/home/*" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
