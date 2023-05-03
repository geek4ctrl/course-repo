
export function fizzBuzz(number: number) {
    if (number > 0 && number < 101) {
        if (number % 15 == 0) return 'FizzBuzz'
        if (number % 3 == 0) return 'Fizz'
        if (number % 5 == 0) return 'Buzz'
    }
}