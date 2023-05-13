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

    it('should return true for "NOT FALSE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("NOT FALSE")).toEqual(true);
    })

    it('shoud return true for "TRUE AND TRUE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("TRUE AND TRUE")).toEqual(true);
    })

    it('should return false for "TRUE AND FALSE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("TRUE AND FALSE")).toEqual(false);
    })

    it('should return false for "FALSE AND TRUE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("FALSE AND TRUE")).toEqual(false);
    })

    it('should return false for "FALSE AND FALSE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("FALSE AND FALSE")).toEqual(false);
    })

    it('should return true for "TRUE OR TRUE"', () => {
        // Arrange

        // Act

        // Arrange
        expect(booleanCalculator("TRUE OR TRUE")).toEqual(true);
    })

    it('should return true for "TRUE OR FALSE"', () => {
        // Arrange

        // Act

        // Arrange
        expect(booleanCalculator("TRUE OR FALSE")).toEqual(true);
    })

    it('should return true for "FALSE OR TRUE"', () => {
        // Arrange

        // Act

        // Assert
        expect(booleanCalculator("FALSE OR TRUE")).toEqual(true);
    })

})
