import axios from 'axios'
import {
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_LIST_FAIL,
} from '../constants/movieConstants'

export const getMovies = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST })

    const res = await axios.get(
      `/api/movies?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    let data = [];
    res.data._id = Math.floor(1000 + Math.random() * 9000);
    data.push(res.data);

    dispatch({
      type: MOVIE_LIST_SUCCESS,
      payload: data,
    })
    
  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}