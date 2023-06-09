
export function militaryTimeValidator(militaryTime: string): boolean {

    const slashDelimiter = "-";
    const militaryTimeArray = militaryTime.split(slashDelimiter);

    const semiColonDelimiter = ":";
    const startingMilitaryTimeString = militaryTimeArray[0];
    const endingMilitaryTimeString = militaryTimeArray[1];

    const startingMilitaryTimeArray = startingMilitaryTimeString.split(semiColonDelimiter);
    const endingMilitaryTimeArray = endingMilitaryTimeString.split(semiColonDelimiter);

    const startingMilitaryTimeHours = +startingMilitaryTimeArray[0].trim();
    const startingMilitaryTimeMinutes = +startingMilitaryTimeArray[1].trim();

    const endingMilitaryTimeHours = +endingMilitaryTimeArray[0].trim();
    const endingMilitaryTimeMinutes = +endingMilitaryTimeArray[0].trim();

    if (militaryTimeArray.length == 0) {
        return false;
    }

    if (militaryTimeArray.length !== 2) {
        return false;
    }

    if (startingMilitaryTimeArray.length == 0) {
        return false;
    }

    if (startingMilitaryTimeArray.length !== 2) {
        return false;
    }

    if (endingMilitaryTimeArray.length == 0) {
        return false;
    }

    if (endingMilitaryTimeArray.length !== 2) {
        return false;
    }

    if (typeof startingMilitaryTimeHours !== 'number') {
        return false;
    }

    if (typeof startingMilitaryTimeMinutes !== 'number') {
        return false;
    }

    if (typeof endingMilitaryTimeHours !== 'number') {
        return false;
    }

    if (typeof endingMilitaryTimeMinutes !== 'number') {
        return false;
    }

    if (startingMilitaryTimeHours < 0 || startingMilitaryTimeHours > 23) {
        return false;
    }

    if (endingMilitaryTimeHours < 0 || endingMilitaryTimeHours > 23) {
        return false;
    }

    if (startingMilitaryTimeMinutes < 0 || startingMilitaryTimeMinutes > 59) {
        return false;
    }

    if (endingMilitaryTimeMinutes < 0 || endingMilitaryTimeMinutes > 59) {
        return false;
    }

    if (startingMilitaryTimeHours > endingMilitaryTimeHours) {
        return false;
    }

    return true;
}
