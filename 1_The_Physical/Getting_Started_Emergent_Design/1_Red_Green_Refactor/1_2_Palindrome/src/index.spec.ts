import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should return a boolean', () => {
        expect(palindromeChecker("mom")).toBe(true);
    })

    it('should return true for mom', () => {
        expect(palindromeChecker("mom")).toBeTruthy();
    })
})