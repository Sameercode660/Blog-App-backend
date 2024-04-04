import { User } from "../models/user.model.js";

const signUp = async( req, res ) => {
    try {
        
        if(!req.body) {
            return res.status(400).json({message: 'body is not found'})
        }

        const {fullName , email, password} = req.body

        if(!fullName || !email || !password) {
            return res.status(400).json({message: 'Anyone field is empty', status: false})
        }

        const data = {
            fullName, 
            email,
            password
        }

        const response = await User.create(data)

        if(!response) {
            return res.status(500).json({message: 'Unable to create the user', status: false})
        }

        return res.status(200).json({data: response, status: true})
    } catch (error) {
        console.log('first most error in signUp', error)        
    }
}

const logIn = async (req, res ) => {
    try {
        if(!req.body) {
            return res.status(400).json({message: 'body is not found'})
        }

        const {email, password} = req.body

        if(!email || !password) { 
            return res.status(400).json({message: 'anyone field is empty', status: false})
        }

        const response = await User.findOne({ $and: [{email}, {password}]}).select("-password")

        if(!response) {
            return res.status(400).json({message: 'User does not exist', status: false})
        }

        return res.status(200).json({data: response, status: true})
    } catch (error) {
        console.log('First most error in LingIn: ', error)
    }
}


export {
    signUp, 
    logIn
}