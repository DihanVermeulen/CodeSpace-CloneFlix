/**
 * CHECKS IF USER IS LOGGED IN
 * @returns TRUE OF FALSE 
 */
export const isSignedIn = () => {
    console.log(localStorage.getItem('SignedIn'));
    let localStorageBool = localStorage.getItem('SignedIn');
    let bool = localStorageBool === 'true' ? true : false;
    return bool;
};

/**
 * EXTRACTS CURRENT LOGGED IN USER FROM THE LOCAL STORAGE
 * @returns LOGGED IN USER
 */
export const getCurrentLoggedInUser = () => {
    return JSON.parse(localStorage.getItem('loggedInAs'));
};

/**
 * @param {*} usersArray TAKES IN THE ARRAY OF USERS
 * @param {*} loggedInUser TAKES IN CURRENT LOGGED IN USER'S OBJECT
 */
export const getUserWatchlist = (usersArray, loggedInUser) => {
    let watchlist = usersArray.map(user => {
        if (loggedInUser.id == user.id) {
            return user.watchlist;
        }
    });
    return watchlist;
};