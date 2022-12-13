import {configureStore} from "@reduxjs/toolkit";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./users/register";
import More from "./privacy";
import './App.css';
import NavbarContent from "./nav";
import SearchComponent from "./igdb";
import {Provider} from "react-redux";
import igdbReducer from "./igdb/igdb-reducer";
import reviewsReducer from "./details/reviews-reducer"
import usersReducer from "./users/user-reducer"
// import userReducer from "./users/user-reducer";
import DetailComponent from "./details/detail";


const store = configureStore({
    reducer: {
        igdb: igdbReducer,
        reviews: reviewsReducer,
        users: usersReducer
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
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/search/:gid" element={<DetailComponent/>}/>
                        <Route path="/privacy" element={<More/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>

        </div>


  );
}

export default App;
