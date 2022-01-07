import React, { useEffect } from 'react'
import './Banner.css'
import axios from '../../apis/axios'
import {apiKey} from '../../constants/constants'

function Banner() {
    useEffect(() => {
        
     axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`)
     .then((res)=>{
         console.log(res.data.results[0]);
     })   
    }, [])
    return (
        <div className='banner'>
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <div className="button">Play</div>
                    <div className="button">My List</div>
                </div>
                <h1 className="description">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
