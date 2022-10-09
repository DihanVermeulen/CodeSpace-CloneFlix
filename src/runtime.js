const checkIfWatchlistExists = () => {
    let watchlistMovies = localStorage.getItem('watchlistMovies');
    if (watchlistMovies == null || watchlistMovies == undefined) {
        localStorage.setItem('watchlistMovies', JSON.stringify([]));
    };
}

export default checkIfWatchlistExists;