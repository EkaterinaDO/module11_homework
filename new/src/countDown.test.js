import { countDown } from "./countDown.js";

describe("test for countDown function", () => { 

    it("function countDown to get number ", () => {
        expect(countDown(5)).toBe("5,4,3,2,1,0")
    }),

    it("function countDown to get negative number", () => {
        expect(countDown(-5)).toBe("Данные неверны")
    }),

    it("function countDown to get empty argument", () => {
        expect(countDown()).toBe("Пусто")
    }),
    
    it("function countDown to get string", () => {
        expect(countDown("fdfdf")).toBe("Это строка")
    })
})