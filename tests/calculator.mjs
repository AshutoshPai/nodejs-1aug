import { expect } from "chai";
import calculator from "../calculator.mjs"

describe("Testing caluculator", ()=>{
    it("should add two numbers", ()=>{
        const result = calculator(3, "+", 4);
        expect(result).eq(7);
    })

    it("should suntract two numbers", ()=>{
        const result = calculator(3, "-", 4);
        expect(result).eq(-1);
    })

    it("should multiply two numbers", ()=>{
        const result = calculator(3, "x", 4);
        expect(result).eq(12);
    })

    it("should divide two numbers", ()=>{
        const result = calculator(12, "/", 4);
        expect(result).eq(3);
    })
})


// -------------------------------------------------------------------------------------------------------------------
// import assert from "assert";
// import calculator from "../calculator.mjs";

// //Addition
// const resultAdd = calculator(3, "+", 4);
// assert.equal(resultAdd, 7, "Addition Operation is not working properly")

// //Subtraction
// const resultSub = calculator(3, "-", 4);
// assert.equal(resultSub, -1, "Subtraction Operation is not working properly")

// //Multiply
// const resultMul = calculator(3, "x", 4);
// assert.equal(resultMul, 12, "Multiply Operation is not working properly")

// //Division
// const resultDiv = calculator(12, "/", 4);
// assert.equal(resultDiv, 3, "Division Operation is not working properly")
// -------------------------------------------------------------------------------------------------------------------