import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios  from '../../apis/axios'
import{ imageUrl,apiKey} from '../../constants/constants'

function RowPost({title,url}) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
      axios.get(url).then((res)=>{
          console.log(res.data.results);
          setMovies(res.data.results)
      }).catch((err)=>{
          alert('Network Error')
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}

    const handleMovieTrailer = (id)=>{
        console.log('clicked id >-->',id);
        axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((res)=>{
            console.log(res.data);
            if(res.data.results.length !== 0){
                setUrlId(res.data.results[0])
            }else{
                alert('Trailer not available')
            }
        }).catch((err)=>{
            alert('Trailer not available')
        })
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map((movie)=><img onClick={()=>handleMovieTrailer(movie.id)} className='poster' src={`${imageUrl+movie.poster_path}`} alt="movie-image" />)
                }
            
            
            </div>
            {
                urlId && <YouTube videoId={urlId.key} opts={opts}  />
            }
            
        </div>
    )
}
export default RowPost
