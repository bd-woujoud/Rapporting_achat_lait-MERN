const joi = require('@hapi/joi')
const ValidationModule = data => {
    const schema = joi.object({

    
        nom: joi
            .string()
            .required()
     
        ,
   
    })
    return schema.validate(data, { abortEarly: false })
}
module.exports = {

    ValidationModule ,
}