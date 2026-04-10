import userValidySchema from "../Validation/userValidation.js";
export const Validation = (req, res, next) => {

    const uservalidation = userValidySchema.validate(req.body, { abortEarly: false });
    
    console.log("Validation Result:", uservalidation.error);
    if (uservalidation.error) {

        return res.status(422).json({ 
            message: "Validation failed", 
            errors: uservalidation.error.details[0].message 
        });
    }
    next();
}