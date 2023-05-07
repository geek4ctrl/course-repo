export interface IResult {
    minimumValue: number,
    maximumValue: number,
    averageValue: number
}

export function statsCalculator(values: any): IResult {

    let result = {} as IResult;
    let minimumValue = Number.MAX_VALUE;

    for (let i = 0; i < values.length; i++) {
        if (minimumValue > values[i]) {
            minimumValue = values[i];
        }
    }

    result.minimumValue = minimumValue;

    return result;

}