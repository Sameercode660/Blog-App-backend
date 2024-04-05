import { Blog } from "../models/blog.model.js";


const postBLog = async (req, res) => {
    try {
        
        if(!req.body) {
            return res.status(400).json({message: 'body is found empty', status: false})
        }

        const {user, title, description} = req.body;

        console.log(user,title, description)
        if(!user || !title || !description) {
            return res.status(400).json({message: 'anyone field is empty', status: false})
        }

        const data = {
            user,
            title,
            description
        }

        const response = await Blog.create(data)

        if(!response) {
            return res.status(400).json({message: 'Unable to create the blog', status: false})
        }

        return res.status(200).json({data: response, status: false})

    } catch (error) {
        console.log('Initial error in post BLog controller: ', error)
    }
}

const fetchBLog = async (req, res) => {
    try {
        
        const response = await Blog.find({}).populate({path: 'user', select: '-password'})

        if(!response) {
            return res.status(400).json({message: 'No any blog in found', status: false})
        }
        return res.status(200).json({data: response, status: true})

    } catch (error) {
        console.log('Initial error in fetchBlog controller: ', error)
    }
}

const myBlog = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json({message: 'Body is found empty', status: false})
        }

        const {user} = req.body

        if(!user) {
            return res.status(400).json({message: 'User id is not found', status: false})
        }

        const response = await Blog.find({user}).populate({path: 'user', select: '-password'})

        if(!response) {
            return res.status(200).json({message: 'No any blog is found', status: false})
        }

        return res.status(200).json({data: response, status: true})

    } catch (error) {
        console.log('initial Error in my Blog: ', error)
    }
}

export {
    postBLog,
    fetchBLog,
    myBlog,
}