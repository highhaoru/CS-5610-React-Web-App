import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";

import LoginComponent from "./users/loginComponent";
import RegisterComponent from "./users/registerComponent";
import ProfileComponent from "./users/profileComponent";

import More from "./privacy";
import './App.css';
import NavbarContent from "./nav";
import SearchComponent from "./igdb";
import {Provider} from "react-redux";
import igdbReducer from "./igdb/igdb-reducer";
import reviewsReducer from "./details/reviews-reducer"
import usersReducer from "./users/user-reducer"
import homeReducer from "./home/home-reducer";
// import userReducer from "./users/user-reducer";
import DetailComponent from "./details/detail";

import CurrentUser from "./users/current-user";
import groupReducer from "./details/group-reducer";
import recentReviews from "./home/recent-reviews";
import ProtectedRoute from "./users/protected-route";
import PublicProfile from "./users/public-profile";
import profileReducer from "./users/profile-reducer";
import historyReducer from "./users/history-reducer";
import EditProfile from "./users/edit-profile";


const store = configureStore({
    reducer: {
        igdb: igdbReducer,
        reviews: reviewsReducer,
        users: usersReducer,
        group:groupReducer,
        home: homeReducer,
        profile: profileReducer,
        history: historyReducer
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
                            <Route path="/login" element={<LoginComponent/>}/>
                            <Route path="/register" element={<RegisterComponent/>}/>
                            <Route path="/profile" element={
                                <ProtectedRoute>
                                    <ProfileComponent/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/edit-profile" element={
                                <ProtectedRoute>
                                    <EditProfile/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/profile/:uid" element={<PublicProfile/>}/>
                            <Route path="/search" element={<SearchComponent/>}/>
                            <Route path="/search/:gid" element={
                                <ProtectedRoute>
                                    <DetailComponent/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/privacy" element={<More/>}/>
                        </Routes>
                    </CurrentUser>

                </BrowserRouter>
            </Provider>

        </div>
  );
}

export default App;
