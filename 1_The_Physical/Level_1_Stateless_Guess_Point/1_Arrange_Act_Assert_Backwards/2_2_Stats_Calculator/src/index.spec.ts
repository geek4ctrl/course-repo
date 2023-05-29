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
        expect(response.maximumValue).toBeTruthy();
        expect(response.averageValue).toBeTruthy();

    });

    it('should return a minimum value of -8', () => {
        // Arrange
        let response: IResult

        // Act
        response = statsCalculator([2, 4, 21, -8, 53, 40])

        // Assert
        expect(response.minimumValue).toEqual(-8);
    })

    it('should return a maximum value of 53', () => {
        // Arrange
        let response: IResult;

        // Act
        response = statsCalculator([2, 4, 21, -8, 53, 40])

        // Assert
        expect(response.maximumValue).toEqual(53);
    })

    it('should return an average value of 18.666666666666668', () => {
        // Arrange
        let response: IResult;

        // Act
        response = statsCalculator([2, 4, 21, -8, 53, 40])

        // Assert
        expect(response.averageValue).toEqual(18.666666666666668);
    })

    it('should have 6 number of elements in the sequence', () => {
        // Arrange
        let response: IResult;

        // Act
        response = statsCalculator([2, 4, 21, -8, 53, 40])

        // Assert
        expect(response.numberOfElements).toEqual(6)
    })
});