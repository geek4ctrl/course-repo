import { IResult } from './index';
import { statsCalculator } from './index';

describe('stats calculator', () => {

    it('should return an IResult object', () => {
        // Arrange
        let response: IResult;

        // Act
        response = statsCalculator([2, 6, -1])

        // Assert
        expect(response.minimumValue).toBeTruthy();
        expect(response.maximumValue).toBeFalsy();
        expect(response.averageValue).toBeFalsy();

    });

    it('should return a minimum value of -8', () => {
        // Arrange
        let response: IResult

        // Act
        response = statsCalculator([2, 4, 21, -8, 53, 40])

        // Assert
        expect(response.minimumValue).toEqual(-8);
    })
});