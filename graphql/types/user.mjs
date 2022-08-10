import { GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql"

const GeoType = new GraphQLObjectType({
    name: "Geo",
    fields: {
        lat: { type: GraphQLString },
        lng: { type: GraphQLString },
    }
})

const AddressType = new GraphQLObjectType({
    name: "Address",
    fields: {
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        geo: { type: GeoType }
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

export const UserType = new GraphQLObjectType({
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

const GeoInputType = new GraphQLInputObjectType({
    name: "GeoInput",
    fields: {
        lat: { type: GraphQLString },
        lng: { type: GraphQLString },
    }
})

const AddressInputType = new GraphQLInputObjectType({
    name: "AddressInput",
    fields: {
        street: { type: GraphQLString },
        suite: { type: GraphQLString },
        city: { type: GraphQLString },
        zipcode: { type: GraphQLString },
        geo: { type: GeoInputType }
    }
})

const CompanyInputType = new GraphQLInputObjectType({
    name: "CompanyInput",
    fields: {
        name: { type: GraphQLString },
        catchPhrase: { type: GraphQLString },
        bs: { type: GraphQLString }

    }
})

export const UserInputType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: AddressInputType },
        website: { type: GraphQLString },
        company: { type: CompanyInputType }
    }
})