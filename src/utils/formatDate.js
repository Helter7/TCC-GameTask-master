import { DateTime } from 'luxon';
/**
 * Assign the project to an employee.
 * @param {Date} selectedDate - The employee who is responsible for the project.
 * @param {boolean} isBrFormat - The name of the employee.
 * @example
 * formatDate('2023-06-30T12:30:11.739Z', true); // 30/06/2023
 * formatDate('2023-06-30T12:30:11.739Z'); // 2023-06-30
 * @returns {string}
 */
export function formatDate(selectedDate, isBrFormat) {
  const date = DateTime.fromJSDate(selectedDate);
  const brFormat = date.toFormat('dd/MM/yyyy');
  const shortFormat = date.toFormat('yyyy-MM-dd');

  if (isBrFormat) {
    return brFormat;
  } else {
    return shortFormat;
  }
}
