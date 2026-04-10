import bcrypt from "bcrypt";

const HashPassword = async (req, res, next) => {
    req.body.password = await bcrypt.hash(String(req.body.password), 8);
    next()
}
export default HashPassword