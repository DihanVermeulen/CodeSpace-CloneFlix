import React, { useEffect, useState } from 'react';

function FetchMovies() {
    const [isLoading, setLoading] = useState(true);
    const [movies, setMovies] = useState();

    useEffect(() => {
        const response = fetch('https://project-apis.codespace.co.za/api/movies');
        const { data } = response.json();
        setMovies(data);
        setLoading(false);
    },
        []);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
    <div>
        {/* {movies.map((movie, key) => {
                return <li key={key}>movie</li>
            })
            } */}
        placeholder
    </div>
    )


}

async function init() {
    const response = await fetch('https://project-apis.codespace.co.za/api/movies');
    const { data } = await response.json();
    let movies = data;
    console.log(movies);
    return movies
}


export default FetchMovies