// <<<<<<< HEAD
const HTTP_STATUS = require("../utils/constant");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
    /**POST /auth/login  */
    async login(req, res, next) {

        let { email, password } = req.body;

        let existingUser;
        try {
            existingUser = await User.findOne({ email: email });
        } catch {
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
        if (!existingUser || existingUser.password != password) {
            const error = Error("Wrong details please check at once");
            return next(error);
        }
        let token;
        try {
            //Creating jwt token
            token = jwt.sign(
                { userId: existingUser.id, email: existingUser.email },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
        } catch (err) {
            console.log(err);
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }

        res
            .status(HTTP_STATUS.SUCCESS)
            .json({
                success: true,
                data: {
                    userId: existingUser.id,
                    email: existingUser.email,
                    token: token,
                },
            });
    },

    /**POST /auth/signup login */
    async signup(req, res, next) {
        const { name, email, password } = req.body;
        const newUser = User({
            name,
            email,
            password,
        });

        try {
            await newUser.save();
        } catch {
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
        let token;
        try {
            token = jwt.sign(
                { userId: newUser.id, email: newUser.email },
                "secretkeyappearshere",
                { expiresIn: "1h" }
            );
        } catch (err) {
            const error = new Error("Error! Something went wrong.");
            return next(error);
        }
        res .status(201)
            .json({
                success: true,
                data: {
                    userId: newUser.id,
                    email: newUser.email, token: token
                },
            });
    },

    /**forgot password */
    forgotPassword(req, res) {
        res.json("This is forgot password");
    },
}

// =======
// const { Request, Response } = require(' "express";
// const { HTTP_STATUS } = require(' "./../utils/constant";

// //signup
// export const signup = async (req: Request, res: Response) => {
//   res.status(HTTP_STATUS.SUCCESS).json("This is signup");
// };

// //Login
// export const login = async (req: Request, res: Response) => {
//   res.status(HTTP_STATUS.SUCCESS).json("This is login");
// };

// //forgot password
// export const forgotPassword = async (req: Request, res: Response) => {
//   res.status(HTTP_STATUS.SUCCESS).json("This is forgot password");
// };
// >>>>>>> 4bf7523 ([EA-99] initial server)
