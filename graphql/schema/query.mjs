import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLSchema } from "graphql"
import { UserModel } from "../../models/users.mjs"

const GeoType = new GraphQLObjectType({
    name: "Geo",
    fields: {
        lat: { type: GraphQLString },
        long: { type: GraphQLString },
    }
})

const AddressType = new GraphQLObjectType({
    name: "Address",
    fields: {
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        geo: { type: GeoType}
    }
})

const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: {
        name: { type: GraphQLString },
        catchPhrase: { type: GraphQLString },
        bs: { type: GraphQLString }

    }
})

const UserType = new GraphQLObjectType({
    name: "User",
    fields: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: AddressType },
        website: { type: GraphQLString },
        company: { type: CompanyType }
    }
})

export const Query = new GraphQLObjectType({
    name: "Root",
    fields: {
        users: {
            type: GraphQLList(UserType),
            resolve: () => {
                return UserModel.find();
            }
        },

        user: {
            type: UserType,
            args: { id : { type: GraphQLString } },
            resolve: (content, args) => {
                return UserModel.findById(args.id);
            }
        }
    }
})

export const Schema = new GraphQLSchema({ query: Query })