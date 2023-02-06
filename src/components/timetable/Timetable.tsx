import { useId } from "react";
import { TableHead } from "./TableHead";
import TABLE_DATA from "../../data/response.json";
import { formatData } from "../../utils";
import { useUuid } from "../../hooks";

type Props = {};

export const Timetable = (props: Props) => {
  const eventData = TABLE_DATA?.[0]?.data?.events;
  return (
    <div className="overflow-auto timetableouter">
      <table className="table align-middle table-bordered timetable">
        <TableHead />
        <TableBody eventData={eventData} />
      </table>
    </div>
  );
};

//@ts-ignore
export const TableBody = ({ eventData }) => {
  const formattedData = formatData(eventData);
  const uid = useUuid();
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

//@ts-ignore
const EventCard = ({ eventInfo }) => {
  return (
    <div className="eventholder">
      <div className="card blue">
        <div className="card-header p-1">
          {eventInfo?.startTime} to {eventInfo?.finishTime}
        </div>
        <div className="card-body p-1">
          <div className="card-text">
            <strong>B</strong>: {eventInfo?.subjectCode}
            <br />
            <strong>S</strong>: {eventInfo?.subjectName}
            <br />
            <strong>T</strong>:{eventInfo?.teacherName}
          </div>
        </div>
      </div>
    </div>
  );
};
