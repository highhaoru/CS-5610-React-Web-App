export const getUserState = store => store.user;
export const isLoggedIn = store => getUserState(store) ? getUserState(store).loggedIn : false;
export const getUserId = store => getUserState(store) ? getUserState(store).userId : null;
export const getUserName = store => getUserState(store) ? getUserState(store).username : null;
