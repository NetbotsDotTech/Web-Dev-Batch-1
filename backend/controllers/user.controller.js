
import User from "../models/user.model.js"

import  bcrypt from 'bcryptjs'
import  jwt from 'jsonwebtoken'


export const Register = async (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    const { username, email, password, firstName, lastName, ...rest } = req.body;
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user = new User({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        ...rest,
      });
  
      await user.save();
      res
      .status(201)
      .json({ 
          status: true,
          message: 'User created successfully',
          data:user
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user' , error:err });
    }
  };



  export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Email Not Found' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid  password' });
      }
      const payload = { userId: user._id, role: user.roles[0] }; 
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    
      res.cookie('access_token', token, { httpOnly: true }); 
      res.status(200).json({ message: 'Login successful', Detail : user.email, });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error logging in',  Error: err });
    }
  };
  

  export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        res.status(200).json(users); // Respond with the users data
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
  export const getUser = async (req, res) => {
    
    try {
        const users = await User.findById(req.params.id); // Fetch all users from the database
        res.status(200).json(users); // Respond with the users data
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};