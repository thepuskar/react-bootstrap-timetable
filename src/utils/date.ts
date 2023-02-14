/* Creating a new date object. */
export const curerrentDate = new Date();

/**
 * It takes a start date and a number of days and returns an array of dates.
 * @param {Date} startDate - Date = new Date(2019, 0, 1);
 * @param {number} numOfDays - number of days to generate
 * @returns An array of dates.
 */
export function generateDateArray(startDate: Date, numOfDays: number): Date[] {
  let dateArray: Date[] = [];
  for (let i = 0; i < numOfDays; i++) {
    dateArray.push(new Date(startDate.getTime() + i * 86400000));
  }
  return dateArray;
}

/**
 * It takes a date string and returns a formatted date string
 * @param {Date} dateString - The date string to be formatted.
 * @returns A function that takes a date string and returns a formatted date string.
 */
export function formatDate(dateString: Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * It creates an array of 24 strings, each string representing an hour of the day, and each string is
 * padded with a leading zero if the hour is less than 10.
 * @returns An array of strings.
 */
export function generate24HourArray(): string[] {
  const hours: string[] = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i < 10 ? `0${i}` : `${i}`);
  }
  return hours;
}

/**
 * It takes a number, n, and returns an array of length n * 24, where each element is a string
 * representing an hour of the day.
 * @param {number} n - number of days
 * @returns An array of 24 hours repeated n times.
 */
export const getNthHours = (n: number) => {
  const repeatedData = [];
  const hours = generate24HourArray();
  for (let i = 0; i < n; i++) {
    repeatedData.push(...hours);
  }
  return repeatedData;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * It takes a month and a year as arguments and returns an array of strings representing the days in
 * that month.
 * @param {| "January"
 *     | "February"
 *     | "March"
 *     | "April"
 *     | "May"
 *     | "June"
 *     | "July"
 *     | "August"
 *     | "September"
 *     | "October"
 *     | "November"
 *     | "December"
 *     | "December"} month - The month you want to generate days for.
 * @param {number} year - number
 * @returns An array of strings.
 */
export function generateDaysInMonth(
  month:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December"
    | "December",
  year: number
) {
  const numOfDays = new Date(year, months.indexOf(month) + 1, 0).getDate();

  const daysInMonth = [];
  for (let i = 1; i <= numOfDays; i++) {
    daysInMonth.push(i.toString().padStart(2, "0"));
  }

  return daysInMonth;
}

/* Getting the current hour from the current date. */
export const currentTime = curerrentDate?.getHours();

/**
 * It takes a JavaScript Date object and returns a string in the format YYYY-MM-DD
 * @param {Date} date - Date - The date to be formatted
 * @returns A string in the format of YYYY-MM-DD
 */
export function formatJsDateToNormalDate(date: Date): string {
  const realMonth: number = date.getMonth() + 1;
  let month: string = realMonth < 10 ? "0" + realMonth : String(realMonth);
  let day: string =
    date.getDate() < 10 ? "0" + date.getDate() : String(date.getDate());

  return [date.getFullYear(), month, day].join("-");
}
