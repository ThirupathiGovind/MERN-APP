import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Movie = ({ movie }) => {
  let { keyword } = useParams;

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/search/${movie.Title}`}>
        <Card.Img src={movie.Poster} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/search/${movie.Title}`}>
          <Card.Title as='div'>
            <strong>{movie.Title}</strong>
            <span className='favorite-icon'><i className='fas fa-heart'></i></span>
          </Card.Title>
        </Link>

        { movie.Ratings[0] ? 
            <Card.Text as='div'>
            <h6>{`${movie.Ratings[0].Value.toString()} ratings`}
            </h6>
            </Card.Text>
        : null }

        <Card.Text as='h3'><i className='fas fa-clock'></i>{movie.Runtime}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Movie
