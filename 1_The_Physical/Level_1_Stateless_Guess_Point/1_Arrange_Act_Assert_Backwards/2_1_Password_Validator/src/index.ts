export interface IResult {
    result: boolean,
    errors: [
        {
            error: string
        },

    ]
}

export function passwordValidator(str: string): IResult {

    // const text = str.search(/^[A-Z]{5,15}/i);
    const result = {} as IResult;
    var hasNumber = /\d/;
    var hasUppercase = /[A-Z]/;

    if (str.length < 5 || str.length > 15) {
        return {
            result: false,
            errors: [
                {
                    error: 'String length should be between 5 and 15 characters long.'
                },
            ]
        }
    }

    if (!hasNumber.test(str)) {
        return {
            result: false,
            errors: [
                {
                    error: 'String should contain at least one digit.'
                },
            ]
        }
    }

    if (!hasUppercase.test(str)) {
        return {
            result: false,
            errors: [
                {
                    error: 'String should contain at least one upper case letter.'
                },
            ]
        }
    }

    return result;
}
