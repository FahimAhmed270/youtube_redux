import React, { useEffect } from 'react'
import './MovieDetail.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieOrShowsDetails, getSelectMovieOrShow, removeSelectMovieOrShow } from '../../features/movies/movieSlice';
import { AiTwotoneStar } from 'react-icons/ai'
import { FaThumbsUp } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { FiFilm } from 'react-icons/fi'


const MovieDetail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectMovieOrShow)

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowsDetails(imdbID));
    return ()=>{
      dispatch(removeSelectMovieOrShow())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>Lodaing..........</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>IMDB Rating <AiTwotoneStar style={{ color: '#ff9e00' }} /> : {data.imdbRating} </span>
              <span>IMDB Votes <FaThumbsUp style={{ color: '#fafafa' }} /> : {''} </span>
              <span>Runtime <FiFilm style={{ color: 'rgb(191, 213, 214)' }} /> : {data.Runtime} </span>
              <span>Year <SlCalender style={{ color: 'rgb(191, 213, 214)' }} /> : {data.Year} </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  )
}

export default MovieDetail
