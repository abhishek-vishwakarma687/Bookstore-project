import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : String,
    price : Number,
    category : String,
    image : String,
    title : String,
})

const Book = mongoose.model('Book', userSchema);

export default Book;