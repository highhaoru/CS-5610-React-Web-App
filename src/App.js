import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
// import Home from "./home";
import Login from "./login";
import './App.css';
import NavbarContent from "./nav";
import SearchComponent from "./igdb";
import {Provider} from "react-redux";
import igdbReducer from "./igdb/igdb-reducer";


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
                        {/*<Route index path="/*" element={<Home/>}/>*/}
                        {/*<Route path="/home/*" element={<Home/>}/>*/}
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </div>


  );
}

export default App;
