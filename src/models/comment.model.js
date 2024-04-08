import mongoose, {Schema} from 'mongoose'

const commentSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    content: {
        type: String,
        required: true,
    },
    commentorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }

}, {timestamps: true})

export const Comment = mongoose.model('Comment', commentSchema)