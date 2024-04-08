

import { Comment } from "../models/comment.model.js"

const getComment = async (req, res) => {
    try {
        
        if(!req.body) {
            return res.status(400).json({message: 'Body is not found ', status: false})
        }

        const {blogId} = req.body

        if(!blogId) {
            return res.status(400).json({message: 'Blog Id is not found', status: false})
        }

        const response = await Comment.find({blogId}).populate({path: 'commentorId', select:'-password'})

        if(!response) {
            return res.status(400).json({message: 'unable to get the post', status: false})
        }

        return res.status(200).json({data: response, status: true})

    } catch (error) {
        console.log('Error in comment controller: ', error)
    }
}




const postComment = async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).json({message: 'body is not found', status: false})
        }

        const {userId, content, commentorId, blogId} = req.body

        if(!userId || !content || !commentorId || !blogId) {
            return res.status(400).json({messag: 'Any one field is empty', status: false})
        }

        const data = {
            userId, 
            content, 
            commentorId, 
            blogId
        }

        const response = await Comment.create(data)

        if(!response) {
            return res.status(400).json({message: 'Unable to comment on the post', status: false})
        }

        return res.status(200).json({data: response, status: true})

    } catch (error) {
        console.log('Error in post Comment controller: ', error)
    }
}

export {
    getComment,
    postComment
}