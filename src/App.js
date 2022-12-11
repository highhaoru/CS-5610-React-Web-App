import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import './App.css';
import NavbarContent from "./nav";
import OmdbSearch from "./omdb/omdb-search";
import SearchComponent from "./igdb";
import {Provider} from "react-redux";
import igdbReducer from "./igdb/igdb-reducer";
import DetailComponent from "./details/detail";


const store = configureStore({
    reducer: {
        igdb: igdbReducer,
    }
})

function App() {
  return (
        <div className="container-extend-lg">
            <Provider store={store}>
                <BrowserRouter>
                    <NavbarContent/>
                    <Routes>
                        <Route index path="/*" element={<Home/>}/>
                        <Route path="/home/*" element={<Home/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/search/:gid" element={<DetailComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </div>


  );
}

export default App;
