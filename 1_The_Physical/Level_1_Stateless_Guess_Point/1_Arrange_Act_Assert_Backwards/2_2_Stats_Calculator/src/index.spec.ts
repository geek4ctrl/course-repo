import { IResult } from './index';
import { statsCalculator } from './index';

describe('stats calculator', () => {

    it('should return an IResult object', () => {
        // Arrange
        let response: IResult;

        // Act
        response = statsCalculator([2, 6, -1])

        // Assert
        expect(response.minimumValue).toBeFalsy();
        expect(response.maximumValue).toBeFalsy();
        expect(response.averageValue).toBeFalsy();

    });
});