/**
 * Check if it is a valid date object.
 * @param {Date} date 
 * @returns true if it is a valid date object.
 */
export function isValidDate(date) {
    return !Number.isNaN(date.getTime());
}
