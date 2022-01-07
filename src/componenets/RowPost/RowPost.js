import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios  from '../../apis/axios'
import{ imageUrl} from '../../constants/constants'

function RowPost({title,url}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(url).then((res)=>{
          console.log(res.data.results);
          setMovies(res.data.results)
      }).catch((err)=>{
          alert('Network Error')
      })
    }, [])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map((movie)=><img className='poster' src={`${imageUrl+movie.poster_path}`} alt="movie-image" />)
                }
            
            
            </div>
        </div>
    )
}
export default RowPost
