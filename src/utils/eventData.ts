import { formatJsDateToNormalDate } from "./date";

/**
 * It takes an array of objects, groups them by roomName, sorts them by startDate, then loops through
 * the start and end dates, and for each date, it checks if there is data for that date, and if there
 * is, it adds it to the newData array, and if there isn't, it adds an empty array.
 * @param {string} startTime - "2020-01-01T00:00:00.000Z"
 * @param {string} endTime - "2020-01-31T23:00:00.000Z"
 * @param {any} eventData - [{
 * @returns An array of objects. Each object has a roomName property and a data property. The data
 * property is an array of arrays. Each array in the data property represents a day. Each array in the
 * data property has objects in it. Each object has a startTime, finishTime, colSpan, and isEvent
 * property.
 */
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
