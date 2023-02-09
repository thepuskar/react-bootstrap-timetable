import { getNthHours, formatDate, isEmpty } from "../../utils";
import { useUuid } from "../../hooks";
import { EventCard } from "../event";

import { ITableHeadDateProps } from "../../interface";
import { weeklyData } from "./data";
import React from "react";

export const WeeklyTable = () => {
  return (
    <div className="row mb-2">
      <div className="col-md-10">
        <div className="overflow-auto timetableouter">
          <table className="table align-middle table-bordered timetable">
            <TableHead date={weeklyData[0]?.day} />
            <TableBody tableData={weeklyData[0]?.event} />
          </table>
        </div>
      </div>
    </div>
  );
};

const TableHead = ({ date }: ITableHeadDateProps) => {
  const nthHours = getNthHours(date?.length);

  return (
    <thead>
      <tr className="date">
        <th className="room">Room</th>
        {date?.map((item: string) => (
          <th colSpan={24} className="text-center" key={item}>
            {formatDate(item)}
          </th>
        ))}
      </tr>
      <tr>
        <th></th>
        {nthHours?.map((hour, i) => (
          <th key={hour + i} data-key={hour}>
            {hour}
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface ITableHeadProps {
  tableData: any[];
}

const TableBody = ({ tableData }: ITableHeadProps) => {
  const uid = useUuid();

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
