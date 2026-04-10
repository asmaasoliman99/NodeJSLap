import joi from "joi";

export const userValidySchema  = joi.object({

    name:joi.string().min(3).max(10).required().messages({
        "string.min":"name must be at least 3 characters long",
        "string.max":"name must be at most 10 characters long",
        "any.required":"name is required"
    }),
    email:joi.string().email().required().messages({
        "string.email":"invalid email format",
        "any.required":"email is required"
    }),
    password:joi.string().min(8).required().messages({
        "string.min":"password must be at least 8 characters long",
        "any.required":"password is required"
    }),
    age:joi.number().min(18).max(80).required().messages({
        "string.min":"age must be at least 18 years old",
        "string.max":"age must be at most 80 years old",
        "any.required":"age is required"
    }),
    
    
})


export default userValidySchema