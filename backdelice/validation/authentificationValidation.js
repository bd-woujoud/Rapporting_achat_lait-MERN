
const joi = require('@hapi/joi')
const ValidationRegister = data => {
    const schema = joi.object({

        nom: joi
        .string().regex(/^[A-Za-z]*$/).required()
        .messages({ "string.pattern.base": "entrez un valid nom" })
        ,
        prenom: joi
        .string().regex(/^[A-Za-z]*$/).required()
    .messages({ "string.pattern.base": "entrez un valid nom" })
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
        .length(8).pattern(/^[0-9]+$/)
        .required()
        .messages({ "string.pattern.base": "entrez un valid numero de téléphpne de 8 characters" }),
   
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

const ValidationLogin = data => {
    const schema = joi.object({
        email: joi
            .string()
            .email()
            .required()
        ,
        password: joi
            .string()
            .min(6)
            .alphanum()
            .required()
    })

    return schema.validate(data, { abortEarly: false })

}




module.exports = {

  ValidationRegister,
  
  ValidationLogin,

    
  
}