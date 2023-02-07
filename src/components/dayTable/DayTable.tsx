import { getDays } from "./genDays";

import { TableHead, TableBody } from "../table";
import DAY_DATA from "./day-data.json";

export const DayTable = () => {
  const date = getDays(DAY_DATA);

  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead date={date} />
            <TableBody tableData={DAY_DATA} />
          </table>
        </div>
      </div>
    </div>
  );
};
