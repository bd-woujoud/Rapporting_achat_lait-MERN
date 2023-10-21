
const joi = require('@hapi/joi')
const centerValidation = data => {
    const schema = joi.object({

     
        code:joi

            .string()
   
            .required()
       ,
        achetteur:joi

            .string()
   
            .required()
       ,
        fournisseur:joi
    
        .string()
        
        .required()
     ,
        code_parent:joi
    
        .string()
        
        .required()
     ,
    
        frs_parent:joi
    
        .string()
        .required()
  ,
    
    region:joi
    
    .string()
        
    .required()
      
,
    
    
    zone:joi
    
    .string()
    .required()
,
    
    gouvernerat:joi
    
    .string()
    .required()
 ,
    
      sous_categorie:joi
    
      .string()
      .required()
 

     ,
    classe:joi
    
    .string()
        
    .required()

,
    
    nature:joi
    
    .string()
        
    .required()
       

})

return schema.validate(data, { abortEarly: false })

}



module.exports = {


    centerValidation
  
}