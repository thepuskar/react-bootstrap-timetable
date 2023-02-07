import { IEvent, IRoomData } from "../interface";

interface IIFormattedData {
  className: string;
  data: IEvent[];
}

export function formatData(data: IEvent[]): IIFormattedData[] {
  const formattedData: IIFormattedData[] = [];
  const groupedData: IRoomData = {};

  data.forEach((item) => {
    if (!groupedData[item.roomName]) {
      groupedData[item.roomName] = [];
    }
    groupedData[item.roomName].push({
      ...item,
    });
  });

  Object.entries(groupedData).forEach(([className, classData]) => {
    (classData as any).sort(
      (a: { startTime: string }, b: { startTime: string }) => {
        const aStart = a.startTime.split(":");
        const bStart = b.startTime.split(":");
        return parseInt(aStart[0]) - parseInt(bStart[0]);
      }
    );

    let previousEnd = "00:00:00";
    const data = (classData as any).reduce(
      (acc: any, item: { startTime: string; finishTime: string }) => {
        const startTime = item.startTime.split(":");
        const finishTime = item.finishTime.split(":");

        const startHour = parseInt(startTime[0]);
        const endHour = parseInt(finishTime[0]);

        const previousEndSplit = previousEnd.split(":");
        const previousEndHour = parseInt(previousEndSplit[0]);

        if (previousEndHour !== startHour) {
          acc.push({
            startTime: previousEnd,
            finishTime: `${startHour}:00:00`,
            colSpan: startHour - previousEndHour,
            hasEvent: false,
          });
        }

        acc.push({
          ...item,
          startTime: item.startTime,
          finishTime: item.finishTime,
          colSpan: endHour - startHour,
          hasEvent: true,
        });
        previousEnd = item.finishTime;
        return acc;
      },
      []
    );

    if (previousEnd !== "23:00:00") {
      const previousEndSplit = previousEnd.split(":");
      const previousEndHour = parseInt(previousEndSplit[0]);
      data.push({
        startTime: previousEnd,
        finishTime: "23:00:00",
        colSpan: 24 - previousEndHour,
        hasEvent: false,
      });
    }

    formattedData.push({ className, data });
  });

  return formattedData;
}
