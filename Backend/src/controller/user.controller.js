import User from "../model/user.model.js";
import bcrypt from "bcrypt"

export const Signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({ message: "user already exists" })
        }
       const document= await User.create({
            fullname,
            email,
            password: hashPassword,
        })

        return res.status(200).json({ message: "User created Successfully",
            user:{
                _id: document._id,
                fullname: document.fullname,
                email: document.email,

            },
        })
    } catch (error) {
        return res.status(500).json({ message: " Internal server error", error })
    }
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid email or password" })
        } else {
            return res.status(200).json({
                message: "User Logged in successfully",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
     } catch (error) {
         console.log("Error: " + error.message)
         return res.status(500).json({ message: "Internal server error" })
     }
}