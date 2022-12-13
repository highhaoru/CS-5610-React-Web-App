import { createSlice } from "@reduxjs/toolkit";

const profile = {
    "firstName": "Hao",
    "lastName": "Jin",
    "handle": "hao",
    "avatar": "hao.jpg",
    "banner": "banner.jpg",
    "bio": "Master of Science in Computer Science, Graduate student of Northeastern University",
    "website": 'youtube.com/webdevtv',
    "location": "Boston, MA",
    "dateOfBirth": "1996-05-04",
    "dateJoined": "2022-01",
    "followingCount": 345,
    "followersCount": 233
}

const profileSlice = createSlice({
     name: 'profile',
     initialState: profile,
     reducers: {
         changeProfile(state, action) {
             state.firstName = action.payload.firstName
             state.lastName = action.payload.lastName
             state.handle = action.payload.handle
             state.bio = action.payload.bio
             state.website = action.payload.website
             state.location = action.payload.location
             state.dateOfBirth = action.payload.dateOfBirth
         }
     }
 });

export const {changeProfile} = profileSlice.actions;
export default profileSlice.reducer;