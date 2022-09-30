const isSignedIn = () => {
    return window.localStorage.getItem('SignedIn')
}

export default isSignedIn
