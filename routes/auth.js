const { Router } = require('express')
const {loginUsuario} = require ('../controllers/auth')
const router = Router()


//Login
router.post('/', loginUsuario)


module.exports = router