
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

    return true;
}
