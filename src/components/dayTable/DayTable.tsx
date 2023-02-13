import { generateDateArray } from "../../utils";

import { TableHead, TableBody } from "../table";
import DAY_DATA from "./day-data.json";

export const DayTable = () => {
  const initialDate = new Date("2023-01-01T00:00:00");
  const dateArray = generateDateArray(initialDate, 1);
  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead date={dateArray} />
            <TableBody tableData={DAY_DATA} />
          </table>
        </div>
      </div>
    </div>
  );
};
