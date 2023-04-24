const express = require('express')
const { findAllBooks, getBooksById } = require('../controller/booksController')

const router = express.Router()

router.get('/books', findAllBooks)
router.get('/books/:id', getBooksById)

module.exports = router