const router = require('express').Router()
const controller = require('../controllers/bookController')
const isAuth = require('../middlewares/isAuth')

router.get('/all', controller.getAll)
router.post('/search/year', controller.searchByYear)
router.post('/search/author', controller.searchByAuthor)
router.post('/create', controller.create)
router.post('/search/name', controller.searchByName)
router.get('/profile', isAuth, controller.getUserLikedBooks)
router.get('/:id', controller.getOne)
router.put('/edit/:id', isAuth, controller.edit)
router.delete('/remove/:id', isAuth, controller.remove)
router.post('/like/:id', isAuth, controller.like)

module.exports = router