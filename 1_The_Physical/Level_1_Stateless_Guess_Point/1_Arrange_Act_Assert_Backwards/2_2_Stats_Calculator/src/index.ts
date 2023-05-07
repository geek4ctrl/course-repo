export interface IResult {
    minimumValue: number,
    maximumValue: number,
    averageValue: number
}

export function statsCalculator(values: any): IResult {

    let result = {} as IResult;
    let minimumValue = Number.MAX_VALUE;
    let maximumValue = Number.MIN_VALUE;
    let averageValue = 0;

    for (let i = 0; i < values.length; i++) {
        if (minimumValue > values[i]) {
            minimumValue = values[i];
        }

        if (maximumValue < values[i]) {
            maximumValue = values[i];
        }

        averageValue += values[i];
    }

    result.minimumValue = minimumValue;
    result.maximumValue = maximumValue;
    result.averageValue = averageValue / values.length;

    return result;

}