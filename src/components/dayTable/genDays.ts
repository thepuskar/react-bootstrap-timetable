import { IEvent } from "../../interface";
export function getDays(data: IEvent[]): string[] {
  const uniqueDates: string[] = [];
  data.forEach((item) => {
    if (!uniqueDates.includes(item.startDate)) {
      uniqueDates.push(item.startDate);
    }
  });
  return uniqueDates;
}
