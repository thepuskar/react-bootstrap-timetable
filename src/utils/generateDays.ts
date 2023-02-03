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
