import React from 'react'
import './Movie.css'

const Movie = ({item}) => {
  return (
     <div className='container'> 
    <div className="card mb-3 App" style={{marginTop:'5%',}}>
    <div className='row'>
    <div className="col-md-4">
    <img src={item.Poster} style={{ width:'500px',height:"400px"}}
    className="card-img-top" alt="..."/>
    </div>
    
    <div className="col-md-8">
    <div className="card bg-dark text-white">
    <img src={item.Poster} style={{ width:'100%',height:"400px",opacity:'0.3'}}className="card-img" alt="..."/>
     <div className="card-img-overlay">
    <h1 className="card-title">{item.Title}</h1>
    <p className="card-text">{item.Language}</p>
    <p className="card-text Actors">{item.Actors}</p>
    <p className="card-text Genre txt">{item.Genre}</p>
    <p className="card-text txt">{item.Type}</p>
    <p className="card-text txt">{item.Year}</p>
    <button id="btn">play</button>
    <button id="btn1">More Info</button>
    </div>
    </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Movie