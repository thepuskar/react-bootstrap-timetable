import { TableHead } from "./TableHead";
import TABLE_DATA from "../../data/response.json";

type Props = {};

export const Timetable = (props: Props) => {
  return (
    <div className="overflow-auto timetableouter">
      <table className="table align-middle table-bordered timetable">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};

export const TableBody = () => {
  console.log("data", TABLE_DATA[0]);
  return (
    <tbody>
      {TABLE_DATA?.[0]?.data?.events?.map((event: any) => (
        <tr>
          <td>{event?.roomName}</td>
        </tr>
      ))}
    </tbody>
  );
};
