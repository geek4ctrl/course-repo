
export function militaryTimeValidator(militaryTime: string): boolean {

    const slashDelimiter = "-";
    const militaryTimeArray = militaryTime.split(slashDelimiter);

    if (militaryTimeArray.length == 0) {
        return false;
    }

    return true;
}
