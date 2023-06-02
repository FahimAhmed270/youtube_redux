import React, { useEffect } from 'react'
import MovieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'
import MovieListing from '../MovieListing/MovieListing'
import {useDispatch} from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'


const Home = () => {
  const movieText = 'Harry'
  const dispatch = useDispatch()


  useEffect(()=>{
    const fetchMovie = async ()=>{
      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
      .catch((err)=>{
        console.log('Error getting movie', err);
      })
      dispatch(addMovies(response.data))
    }
    fetchMovie()
  },[])

  
  return (
    <>
    <div className='banner-img'></div>
    <MovieListing/> 
    </>
  )
}

export default Home
