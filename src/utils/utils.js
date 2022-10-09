export const isSignedIn = () => {
    console.log(localStorage.getItem('SignedIn'));
    let localStorageBool = localStorage.getItem('SignedIn');
    let bool = localStorageBool === 'true' ? true : false;
    return bool;
}

export const getCurrentLoggedInUser = () => {
    return JSON.parse(localStorage.getItem('loggedInAs'));
}