const Joi = require ('joi')

const DateValidation = {
    body: Joi.object().keys({
        date: Joi.date().iso().greater('2016-11-22').less('now')
    })
}

module.exports={
    DateValidation

}

