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

});
