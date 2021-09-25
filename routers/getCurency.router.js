const express = require('express')
const validate = require('../middlewares/validate')
const validaye = require('../validations/dateValidation')
const controller = require('../controllers/getCurency.controller')


const router = express.Router()

router.get('/today',  controller.getToday)
router.get('/anotherday', validate(validaye.DateValidation), controller.getAnotherDay)

module.exports = router;


