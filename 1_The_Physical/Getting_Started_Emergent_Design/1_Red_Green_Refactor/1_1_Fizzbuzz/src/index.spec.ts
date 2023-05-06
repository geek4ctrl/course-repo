import { fizzBuzz } from './fizzbuzz'

describe("fizzbuzz", () => {

    it('returns a string', () => {
        expect(typeof fizzBuzz(5)).toBe('string')
    })

    it('returns Fizz for 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })

    it('returns Buzz for 5', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })

    it('returns FizzBuzz for 3 and 5', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
    })

    it('takes numbers from 1 to 100', () => {
        expect(fizzBuzz(-1)).toBeFalsy()
    })

});
