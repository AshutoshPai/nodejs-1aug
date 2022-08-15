import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: { required : true, type : String },
    email: { required : true, type : String },
    username: { required : true, type : String },
    phone: { required : true, type : String },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            long: String,
        }
    },
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    },
    password : { required : true, type : String }
}, {
    versionKey: false
})

export const UserModel = mongoose.model("Users", UserSchema, "users")