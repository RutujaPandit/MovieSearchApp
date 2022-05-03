import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './MovieBox.css';

const MovieBox = () => {

    const [movieName,setMovieName] = useState('');
    const[movieData,setMovieData] = useState([]);

    const handleSearch = (e) =>{
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?t=${movieName}&apikey=38682202`)
        .then((response) => setMovieData([response.data]))
    }
    console.warn(movieData)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Movie SearchApp</a>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                         <i className="fa-thin fa-camera-movie"></i>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" name="movieName" onChange={ (e) => setMovieName(e.target.value)} 
                            type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-secondary" onClick={(e)=> handleSearch(e)} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
                {  movieData.map( (item,i) => {
                    return(
                        <Movie key={i} item={item}/>
                   )
                    
                    
                })
                    
                }
        </>
    )
}

export default MovieBox