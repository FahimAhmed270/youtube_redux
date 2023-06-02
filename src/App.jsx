import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import MovieDetail from './component/MovieDetail/MovieDetail'
import PagesNotFound from './component/PagesNotFound/PagesNotFound'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
            <Route path='*' element={<PagesNotFound/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
