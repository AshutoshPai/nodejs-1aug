import chai, { expect } from "chai";
import chaihttp from "chai-http";
import { app } from "../server.mjs";

chai.use(chaihttp);

describe("Testing API", ()=>{
    it("should return list of users", async ()=>{
        const response = await chai.request(app).get("/api/users");
        expect(response).to.have.status(200);
        expect(response.body.length).greaterThan(3);
    })
})