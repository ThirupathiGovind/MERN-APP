import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Movie from '../components/Movie';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { getMovies } from '../actions/movieActions'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const movieList = useSelector((state) => state.movieList)
  const { loading, error, movies, page, pages } = movieList

  useEffect(() => {
    dispatch(getMovies(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      { !keyword ? <h1>Default Movie Name - To prevent empty page !</h1> : <h1>Your Movie</h1> }
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {movies.map((movie) => (
              <Col key={movie.Title} sm={12} md={6} lg={4} xl={4}>
                 <Movie movie={movie} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
