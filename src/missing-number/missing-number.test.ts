import {describe, expect, test} from '@jest/globals';
import { missingNumber } from './missing-number';
describe("missingNumber", () => {
    test("missingNumber must return the missing number in list", () => {
        const cases = [
            {input: [3,0,1], expected: 2},
            {input: [0,1], expected: 2},
            {input: [9,6,4,2,3,5,7,0,1], expected: 8}
        ]
        cases.forEach(({input, expected}) => expect(missingNumber(input)).toBe(expected))
    })
})