import { useUUID } from "../../hooks";
import { formatData } from "../../utils";
import { EventCard } from "../event";
import { IEvent } from "../../interface";

interface ITableHeadProps {
  tableData: IEvent[];
}

export const TableBody = ({ tableData }: ITableHeadProps) => {
  const formattedData = formatData(tableData);
  const uid = useUUID();
  return (
    <tbody>
      {formattedData?.map((event: any, i: number) => (
        <tr key={uid + i}>
          <td>{event?.className}</td>
          {event?.data?.map((eventInfo: any, i: number) => (
            <td key={uid + i} colSpan={eventInfo?.colSpan}>
              {eventInfo?.hasEvent ? <EventCard eventInfo={eventInfo} /> : null}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
