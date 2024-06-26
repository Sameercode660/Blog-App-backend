import { Blog } from "../models/blog.model.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { uploadOnCloudinary } from "../utils/Cloudinary.utils.js";

const postBLog = async (req, res) => {
    try {
        
        if(!req.body) {
            return res.status(400).json({message: 'body is found empty', status: false})
        }

        const {user, title, description} = req.body;
        const imagePath = req.files.image[0].path

        if(!user || !title || !description) {
            return res.status(400).json({message: 'anyone field is empty', status: false})
        }
        
        console.log(user,title, description)

        const image = await uploadOnCloudinary(imagePath)

        console.log(image)
        if(!image) {
            console.log('Unable to upload the image')
        }
        const data = {
            user,
            title,
            description,
            image: image.url
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

const getSingleBlog = async(req, res) => {
    try {
        
        if(!req.body) {
            return res.status(400).json({message: 'body is not found', status: false})
        }

        const {blogId}  = req.body

        if(!blogId) {
            return res.status(400).json({message: 'blog is not found', status: false})
        }

        const response = await Blog.findOne({_id: blogId}).populate({path: 'user', select:'-password'})

        if(!response) {
            return res.status(400).json({message: 'blog is not found', status: false})
        }

        return res.status(200).json({data: response, status: true})
    } catch (error) {
        console.log('Error in getSingleBlog controller: ', error)
    }
}

export {
    postBLog,
    fetchBLog,
    myBlog,
    getSingleBlog
}