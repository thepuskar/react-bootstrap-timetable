import React from "react";

import { isEmpty } from "../../utils";
import { useUUID } from "../../hooks";
import { EventCard } from "../event";
interface ITableHeadProps {
  tableData: any[];
}

export const TableBody = ({ tableData }: ITableHeadProps) => {
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
