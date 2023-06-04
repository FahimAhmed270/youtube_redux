import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import user from '../../img/user.png'
import { BsSearch } from 'react-icons/bs'
import { useDispatch} from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    if(term === '') return alert('Please type and movie or show')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <div className="header">
      <Link to='/'>
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input type="text" value={term} placeholder='Search' onChange={(e) => setTerm(e.target.value)} />
          <button type='submit'><BsSearch /></button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default Header
