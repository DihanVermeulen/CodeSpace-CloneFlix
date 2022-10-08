const checkIfWatchlistExists = () => {
    let watchlistMovies = localStorage.getItem('watchlistMovies');
    if (watchlistMovies != null || watchlistMovies != undefined) {
        console.table('watch list movies', JSON.parse(watchlistMovies));
    }
    else {
        console.log('no items in watchlist');
        localStorage.setItem('watchlistMovies', JSON.stringify([]));
    };
}

export default checkIfWatchlistExists;