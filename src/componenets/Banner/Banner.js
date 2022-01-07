import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../apis/axios'
import {apiKey,imageUrl} from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        
     axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`)
     .then((res)=>{
         console.log(res.data.results[Math.floor(Math.random() * 20)]);
         setMovie(res.data.results[Math.floor(Math.random() * 20)])
     })   
    }, [])
    return (
        <div 
        style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}
        className='banner'>
            <div className="content">
                <h1 className="title">{movie.title}</h1>
                <div className="banner_buttons">
                    <div className="button">Play</div>
                    <div className="button">My List</div>
                </div>
                <h1 className="description">{movie.overview}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
