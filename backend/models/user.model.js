import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name gereklidir! "]
    },
    username: {
        type: String,
        required: [true, "Username gereklidir"],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Password gereklidir"],
        minlength: 6
    },

    gender: {
        type: String,
        required: [true, "Gender gereklidir"],
        enum: ["male", "female"]
    },

    profilePic: {
        type: String,
        default: "",
    },
    //createdAt, updatedAt
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;