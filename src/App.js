import {configureStore} from "@reduxjs/toolkit";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Login from "./users/login";
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
import Profile from "./users/profile";
import CurrentUser from "./users/current-user";


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
                    <CurrentUser>
                        <NavbarContent/>
                        <Routes>

                            <Route index path="/*" element={<Home/>}/>
                            <Route path="/home/*" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/search" element={<SearchComponent/>}/>
                            <Route path="/search/:gid" element={<DetailComponent/>}/>
                            <Route path="/privacy" element={<More/>}/>
                        </Routes>
                    </CurrentUser>

                </BrowserRouter>
            </Provider>

        </div>


  );
}

export default App;
