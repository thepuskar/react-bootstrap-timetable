import { formatJsDateToNormalDate } from "./date";

export function eventData(startTime: string, endTime: string, eventData: any) {
  const formattedData: any[] = [];

  const groupedData: any = [];

  eventData.forEach((item: { roomName: string | number }) => {
    if (!groupedData[item.roomName]) {
      groupedData[item.roomName] = [];
    }
    groupedData[item.roomName].push({
      ...item,
    });
  });

  Object.entries(groupedData).forEach(([roomName, classData]) => {
    (classData as any).sort(
      (a: { startDate: string }, b: { startDate: string }) => {
        const aStart: Date = new Date(a.startDate);
        const bStart: Date = new Date(b.startDate);
        return aStart.getTime() - bStart.getTime();
      }
    );

    const startDate: Date = new Date(startTime);
    const endDate: Date = new Date(endTime);
    const newData = [];

    // loop through the start and end dates
    for (
      let currentDate = startDate;
      currentDate <= endDate;
      currentDate.setDate(currentDate.getDate() + 1)
    ) {
      const formattedDate = formatJsDateToNormalDate(currentDate);

      const dataForDate = (classData as any).filter(
        (data: { startDate: string }) =>
          data.startDate.split("T")[0] === formattedDate
      );

      // if there is data for the current date, add it to the newData array
      if (dataForDate.length > 0) {
        let previousEnd = "00:00:00";
        const reduceData = (dataForDate as any).reduce(
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
                isEvent: false,
              });
            }

            acc.push({
              ...item,
              startTime: item.startTime,
              finishTime: item.finishTime,
              colSpan: endHour - startHour,
              isEvent: true,
            });
            previousEnd = item.finishTime;
            return acc;
          },
          []
        );

        if (previousEnd !== "23:00:00") {
          const previousEndSplit = previousEnd.split(":");
          const previousEndHour = parseInt(previousEndSplit[0]);
          reduceData.push({
            startTime: previousEnd,
            finishTime: "23:00:00",
            colSpan: 24 - previousEndHour,
            isEvent: false,
          });
        }
        newData.push([...reduceData]);
      } else {
        // if there is no data for the current date, add an empty data array
        newData.push([]);
      }
    }

    formattedData.push({ roomName, data: newData });
  });
  return formattedData;
}
