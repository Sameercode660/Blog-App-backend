import mongoose, {Schema} from 'mongoose'


const likeSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likedUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }
}, { timestamps: true})

export const Like = mongoose.model("Like", likeSchema)