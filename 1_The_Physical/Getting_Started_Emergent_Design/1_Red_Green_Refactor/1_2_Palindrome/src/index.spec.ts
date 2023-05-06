import { palindromeChecker } from './index'

describe('palindrome checker', () => {

    it('should return a boolean', () => {
        expect(palindromeChecker("mom")).toBe(true);
    })

    it('should return true for mom', () => {
        expect(palindromeChecker("mom")).toBeTruthy();
    })

    it('should return false for bill', () => {
        expect(palindromeChecker("bill")).toBeFalsy();
    })

    it('should return true for Mom', () => {
        expect(palindromeChecker("Mom")).toBeTruthy();
    })

})