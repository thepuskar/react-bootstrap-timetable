import { generateDateArray, eventData } from "../../utils";

import { TableHead, TableBody } from "../table";

import DAY_DATA from "./day-data.json";

export const DayTable = () => {
  const startDate: string = "2023-01-02T00:00:00";
  const initialDate = new Date(startDate);
  const dateArray = generateDateArray(initialDate, 1);
  const formattedData = eventData(startDate, startDate, DAY_DATA);

  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead date={dateArray} />
            <TableBody tableData={formattedData} />
          </table>
        </div>
      </div>
    </div>
  );
};
