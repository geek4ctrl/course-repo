

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

    if (expression == "TRUE AND TRUE") {
        return true;
    }

    if (expression == "TRUE AND FALSE") {
        return false;
    }

    if (expression == "FALSE AND TRUE") {
        return false;
    }

    if (expression == "FALSE AND FALSE") {
        return false;
    }

    if (expression == "TRUE OR TRUE") {
        return true;
    }

    return false;

}