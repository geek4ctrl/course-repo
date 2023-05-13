

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

    if (expression == "NOT FALSE") {
        return true;
    }

    return false;

}