import asyncHandler from 'express-async-handler'
import Movie from '../models/movieModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

// IMDB apiKey
const apiKey = 'ce3cb798';

const getMovies = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword || 'warrior';
  const response = await fetch(`http://www.omdbapi.com/?t=${keyword}&apikey=${apiKey}`);
  const data = await response.json();

  if (data.Error) {
    res.status(404);
    throw new Error(`No movie title matches the following search term "${keyword}"`);
  } else {
    res.json(data);
  }
})


const favoriteUnfavoriteMovie = asyncHandler(async (req, res) => {
  const title = req.params.title;

  try {
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    movie.isFavorite = !movie.isFavorite;
    await movie.save();

    const msg = movie.isFavorite ? 'Movie favorited' : 'Movie unfavorited';
    return res.status(200).json({ message: msg });

  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
})

export {
  getMovies,
  favoriteUnfavoriteMovie
}
