import { useRef } from "react";
import { generateDateArray, eventData } from "../../utils";
import { useDownloadExcel } from "../../hooks/useDownloadExcel";
import { TableHead, TableBody } from "../table";
import { htmlTableToCsv } from "../../lib/exportCSV";

import { ORIGINAL_DATA } from "./data";

export const WeeklyTable = () => {
  const initialDate = new Date("2023-01-01T00:00:00");
  const dateArray = generateDateArray(initialDate, 7);

  const startDate: string = "2023-02-20T00:00:00";
  const endDate: string = "2023-02-27T00:00:00";
  const formattedWeeklyData = eventData(startDate, endDate, ORIGINAL_DATA);

  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <div className="row mb-2">
      <button className="btn btn-default" onClick={onDownload}>
        Download
      </button>
      <button
        className="btn btn-default"
        onClick={() => htmlTableToCsv("viewTimetable", "timetable")}
      >
        Download as CSV
      </button>
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table
            className="table align-middle table-bordered timetable"
            ref={tableRef}
            id="viewTimetable"
          >
            <TableHead showCurrentTime={false} date={dateArray} />
            <TableBody tableData={formattedWeeklyData} />
          </table>
        </div>
      </div>
    </div>
  );
};
