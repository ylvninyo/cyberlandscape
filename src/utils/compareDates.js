import { isValidDate } from './isValidDate';

export function compareDates(dateA, dateB) {
    if (!isValidDate(dateA) && !isValidDate(dateB)) {
        return 0;
    }

    if (!isValidDate(dateA)) {
        return -1;
    }

    if (!isValidDate(dateB)) {
        return -1;
    }

    return dateB.getTime() - dateA.getTime();
}
