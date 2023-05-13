import { booleanCalculator } from './index';

describe('boolean calculator', () => {

    it('should return true for "TRUE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("TRUE")).toEqual(true);
    })

    it('should return false for "FALSE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("FALSE")).toEqual(false);
    })

    it('should return false for "NOT TRUE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("NOT TRUE")).toEqual(false);
    })

})
