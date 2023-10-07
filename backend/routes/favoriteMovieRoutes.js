import express from 'express'
const router = express.Router()

import { favoriteUnfavoriteMovie } from '../controllers/movieController.js'

router.route('/:title').post(favoriteUnfavoriteMovie);
export default router
