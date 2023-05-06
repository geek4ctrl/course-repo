interface IResult {
    result: boolean,
    errors: [
        {
            textLength: 'String length should be between 5 and 15 characters long.'
        },
        {
            oneDigit: 'String should contain at least one digit.'
        },
        {
            upperCase: 'String should contain at least one upper case letter.'
        },
    ]
}

export function passwordValidator(str: string): IResult {
    const result = {} as IResult;
    return result;
}
