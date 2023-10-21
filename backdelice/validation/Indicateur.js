const joi = require('@hapi/joi')
const ValidationIndicateur = data => {
    const schema = joi.object({

    
        nom: joi
            .string()
            .required()
        ,
       
        description: joi
            .string()
            .required()
        ,
        note: joi
            .number()
            // .required()
        ,
        observation: joi
            .string()
            // .required()
        ,
    
    })
    return schema.validate(data, { abortEarly: false })
}
module.exports = {

    ValidationIndicateur ,
}