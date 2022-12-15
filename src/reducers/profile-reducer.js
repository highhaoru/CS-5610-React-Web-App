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
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state = {...action.payload};
            return state
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;