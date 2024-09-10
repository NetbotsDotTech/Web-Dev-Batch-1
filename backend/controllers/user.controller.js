
import User from "../models/user.model.js"
export const Register = async (req, res, next) => {

    // const { username, email, password, firstName, lastName, ...rest } = req.body;


    const user = new User(req.body)


    await user.save();
    res
        .status(201)
        .json({
            status: true,
            message: 'User created successfully',
            data: user
        });

}