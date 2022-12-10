// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Home from "./home";
import './App.css';
import NavbarContent from "./nav";
import OmdbSearch from "./omdb/omdb-search";
import SearchComponent from "./search";

function App() {
  return (
      <BrowserRouter>
        <div className="container-extend-lg">
            <NavbarContent/>
            <Routes>
                <Route index path="/*" element={<Home/>}/>
                <Route path="/home/*" element={<Home/>}/>
                <Route path="/search/*" element={<SearchComponent/>}/>
            </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
