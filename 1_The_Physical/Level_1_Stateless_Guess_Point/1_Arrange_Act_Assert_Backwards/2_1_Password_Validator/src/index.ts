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

    return result;
}
