import {Blog} from '../models/blog.model.js'
import { Like } from '../models/like.model.js'


const getLike = async (req, res) => {
    try{
        if(!req.body) {
            return res.status(400).json({message: 'body is found empty'})
        }

        const {blogId} = req.body

        if(!blogId) {
            return res.status(400).json({message: 'Blog Id is not found'})
        }

        const response = await Like.find({blogId})

        if(!response) {
            return res.status(200).json({message: 'No like found', status: false})
        }

        return res.status(200).json({data: response, status: true})

    }catch(error) {
        console.log('Error in get Like controller: ', error)
    }
}

const postLike = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json({message: 'body is not found', status: false})
        }

        const {userId, likedUserId, blogId} = req.body

        const data = {
            userId, 
            likedUserId, 
            blogId
        }

        const response = await Like.create(data)

        if(!response) {
            return res.status(400).json({message: 'unable to like the blog', status: false})
        }

        return res.status(200).json({data: response, status: true})
    } catch (error) {
        console.log('Error in post like controller: ', error)
    }
}

export {
    getLike, 
    postLike
}