import { passwordValidator } from './index';
import { IResult } from './index'

describe('password validator', () => {

  test('hello', () => {
    expect("between 5 and 15").toContain('5 and 15')
  })

  it('should return an IResult object', () => {
    expect(passwordValidator("testing")).toBeTruthy()
  })

  it('should return an invalid length error for strings less than 5 characters.', () => {
    // arrange
    let response: IResult;

    // act
    response = passwordValidator('mom')

    // assert
    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(1);
    expect(response.errors[0].error).toContain('String length should be between 5 and 15 characters long.')
  })

})


