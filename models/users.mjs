import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    phone: String,
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
    }
}, {
    versionKey: false
})

export const UserModel = mongoose.model("Users", UserSchema, "users")