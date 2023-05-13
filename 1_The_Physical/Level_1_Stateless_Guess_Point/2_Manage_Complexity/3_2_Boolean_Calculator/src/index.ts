

export function booleanCalculator(expression: string): boolean {

    if (expression == "TRUE") {
        return true;
    }

    if (expression == "FALSE") {
        return false;
    }

    if (expression == "NOT TRUE") {
        return false;
    }

    return false;

}