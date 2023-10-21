const joi = require('@hapi/joi')
const ValidationLogin = data => {
    const schema = joi.object({

    
        email: joi
            .string()
            .required()
            .email()
        ,
       
        password: joi
            .string()
            .min(6)
            .alphanum()
            .required()
        ,

        
        
           
    })
    return schema.validate(data, { abortEarly: false })
}
module.exports = {

    ValidationLogin ,
}