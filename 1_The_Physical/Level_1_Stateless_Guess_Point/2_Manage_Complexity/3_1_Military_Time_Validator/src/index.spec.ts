import { militaryTimeValidator } from './index';

describe('military time validator', () => {

    it('should return true or false', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    });

    it('should check whether there is a - delimiter', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    });

    it('should have 2 arrays after being split by - delimiter', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true)
    })

    it('should have a semicolon delimiter in the starting military time array', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have a semicolon delimiter in the ending military time array', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have numbers in starting military time hours', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have numbers in starting military time minutes', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have numbers in ending military time hours', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have numbers in ending military time minutes', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

    it('should have numbers between 0 and 23 for starting hours', () => {
        // Arrange

        // Act

        // Assert
        expect(militaryTimeValidator("01:12 - 14:32")).toEqual(true);
    })

})
