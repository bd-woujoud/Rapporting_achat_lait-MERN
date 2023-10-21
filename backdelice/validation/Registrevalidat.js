const joi = require('@hapi/joi')
const ValidationRegister = data => {
    const schema = joi.object({

        nom: joi
            .string()
            //.min(3)
           // .max(6)
            .required()
        ,
        prenom: joi
            .string()
            //.min(3)
            //.max(6)
            .required()
        ,
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

        
        num_tel: joi
            .string()
            .length(8)
            .pattern(/^[0-9]+$/)
            .required()
        ,
   
        matricule: joi
            .number()
            .required()
        ,

        role: joi
            .string()
            .valid('admin', 'achetteur')
            .default('achetteur'),

     
           
    })
    return schema.validate(data, { abortEarly: false })
}
module.exports = {

  ValidationRegister,
}