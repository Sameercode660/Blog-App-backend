import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Blog = mongoose.model('Blog', blogSchema)