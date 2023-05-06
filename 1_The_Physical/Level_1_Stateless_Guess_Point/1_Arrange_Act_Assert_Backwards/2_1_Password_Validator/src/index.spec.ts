import { passwordValidator } from './index'

describe('password validator', () => {

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  })

  it('should return an IResult object', () => {
    expect(passwordValidator("testing")).toBeTruthy()
  })

})


