export interface IResult {
    minimumValue: number,
    maximumValue: number,
    averageValue: number
}

export function statsCalculator(values: any): IResult {

    let result = {} as IResult;
    let minimumValue = Number.MAX_VALUE;
    let maximumValue = Number.MIN_VALUE;

    for (let i = 0; i < values.length; i++) {
        if (minimumValue > values[i]) {
            minimumValue = values[i];
        }

        if (maximumValue < values[i]) {
            maximumValue = values[i];
        }
    }

    result.minimumValue = minimumValue;
    result.maximumValue = maximumValue;

    return result;

}