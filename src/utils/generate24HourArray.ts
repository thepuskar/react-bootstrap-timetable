export function generate24HourArray(): string[] {
  const hours: string[] = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i < 10 ? `0${i}` : `${i}`);
  }
  return hours;
}

export const getNthHours = (n: number) => {
  const repeatedData = [];
  const hours = generate24HourArray();
  for (let i = 0; i < n; i++) {
    repeatedData.push(...hours);
  }
  return repeatedData;
};
