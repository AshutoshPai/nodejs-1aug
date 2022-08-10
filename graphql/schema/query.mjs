import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql"
import { UserModel } from "../../models/users.mjs"
import { UserType } from "../types/user.mjs";
import { Mutation } from "./mutation.mjs";

export const Query = new GraphQLObjectType({
    name: "Root",
    fields: {
        users: {
            type: GraphQLList(UserType),
            resolve: () => {
                return UserModel.find();
            }
        },

        // GraphQL
        // {
        //     users {
        //         _id
        //         name
        //     }
        // }

        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve: (content, args) => {
                return UserModel.findById(args.id);
            }
        }

        // GraphQL With ID
        // {
        //     user(id : "62f2018749dfdf9a9f870c20") {
        //         _id
        //         name
        //     }
        // }
    }
})

export const Schema = new GraphQLSchema({ query: Query, mutation: Mutation })