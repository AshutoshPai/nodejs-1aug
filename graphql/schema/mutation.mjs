import { GraphQLObjectType, GraphQLString } from "graphql";
import { UserModel } from "../../models/users.mjs";
import { UserInputType, UserType } from "../types/user.mjs";

export const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields: {
        addUser: {
            type: UserType,
            args: {user: { type: UserInputType }},
            resolve: (content, args)=>{
                const newUser = new UserModel(args.user);
                return newUser.save();
            }
        },

        deleteUser: {
            type: UserType,
            args: {id: { type: GraphQLString }},
            resolve: (content, args)=>{
                return UserModel.findByIdAndDelete(args.id);
            }
        }
    }
})