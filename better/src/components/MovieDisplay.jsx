import React from "react";



const MovieDisplay = () => {
    return (
        <div className="container">
            <div className="movie">
                <p>{movie.year}</p>
            </div>
            <div className="movie">
                <img src= {movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400' } alt = {movie.Title}/>
            </div>
            <div className="movie">
                <span>{movie.Type}</span>
                <p>{movie.title}</p>
            </div>
        </div>
    )
}

export default MovieDisplay;