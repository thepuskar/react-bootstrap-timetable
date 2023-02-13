import React from "react";

import { isEmpty, generateDateArray } from "../../utils";
import { useUUID } from "../../hooks";

import { EventCard } from "../event";
import { TableHead } from "../table";

import { weeklyData } from "./data";

export const WeeklyTable = () => {
  const initialDate = new Date("2023-01-01T00:00:00");
  const dateArray = generateDateArray(initialDate, 7);
  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead showCurrentTime={false} date={dateArray} />
            <TableBody tableData={weeklyData[0]?.event} />
          </table>
        </div>
      </div>
    </div>
  );
};

interface ITableHeadProps {
  tableData: any[];
}

const TableBody = ({ tableData }: ITableHeadProps) => {
  const uid = useUUID();

  return (
    <tbody>
      {tableData?.map((event: any, i: number) => (
        <tr key={uid + i}>
          <td>{event?.roomName}</td>
          {event?.data?.map((data: any, j: number) => {
            return (
              <React.Fragment key={uid + j}>
                {isEmpty(data) ? (
                  <td colSpan={24} />
                ) : (
                  <>
                    {data?.map((event: any, i: any) => (
                      <td colSpan={event?.colSpan} data-id={i} key={uid + i}>
                        {event?.isEvent ? (
                          <EventCard eventInfo={event} />
                        ) : null}
                      </td>
                    ))}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
