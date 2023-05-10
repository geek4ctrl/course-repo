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

})
