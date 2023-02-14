import { generateDateArray, eventData } from "../../utils";

import { TableHead, TableBody } from "../table";

import { ORIGINAL_DATA } from "./data";

export const WeeklyTable = () => {
  const initialDate = new Date("2023-01-01T00:00:00");
  const dateArray = generateDateArray(initialDate, 7);

  const startDate: string = "2023-01-01T00:00:00";
  const endDate: string = "2023-01-07T00:00:00";
  const formattedWeeklyData = eventData(startDate, endDate, ORIGINAL_DATA);

  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead showCurrentTime={false} date={dateArray} />
            <TableBody tableData={formattedWeeklyData} />
          </table>
        </div>
      </div>
    </div>
  );
};
