// import { formatData, getNthHours, currentTime, isEmpty } from "../../utils";
// import { EventCard } from "../event";
// import { IEvent } from "../../interface";

// interface ITableHeadProps {
//   tableData: IEvent[];
//   headerData: string[];
// }

// export const TableBody = ({ tableData, headerData }: ITableHeadProps) => {
//   const formattedData = formatData(tableData);
//   const nthtd = getNthHours(headerData?.length);
//   return (
//     <tbody>
//       {formattedData.map((row, i) => (
//         <tr key={i}>
//           <td>{row?.className}</td>
//           {nthtd.map((header, j) => {
//             let occupied = false;
//             let currentEvent: IEvent = {
//               campusId: 0,
//               campusCode: "",
//               campusName: "",
//               cohortName: "",
//               startDate: "",
//               finishDate: "",
//               startTime: "",
//               finishTime: "",
//               hasBreak: false,
//               resourceId: 0,
//               roomId: 0,
//               roomType: "",
//               roomCode: "",
//               roomName: "",
//               venueId: 0,
//               venueCode: "",
//               venueDescription: "",
//               subjectId: 0,
//               subjectCode: "",
//               subjectName: "",
//               moduleId: 0,
//               moduleCode: "",
//               moduleName: "",
//               teachereId: 0,
//               teacherName: "",
//             };
//             let style = {};

//             row.data.forEach((event) => {
//               if (
//                 parseInt(header) >= parseInt(event.startTime) &&
//                 parseInt(header) < parseInt(event.finishTime)
//               ) {
//                 occupied = true;
//                 currentEvent = event;

//                 style = {
//                   position: "absolute",
//                   left: 0,
//                   top: 0,
//                   zIndex: 1,
//                   width:
//                     (parseInt(currentEvent.finishTime.split(":")[0]) -
//                       parseInt(currentEvent.startTime.split(":")[0])) *
//                       50 +
//                     "px",
//                   height: "100%",
//                 };
//               }
//             });

//             return (
//               <td
//                 key={header}
//                 data-id={header}
//                 style={{
//                   position: "relative",
//                   height: occupied ? "100px" : "",
//                   width: occupied ? "50px" : "",
//                 }}
//                 className={
//                   currentTime.toString() === header ? "currentTime" : ""
//                 }
//               >
//                 <>
//                   {isEmpty(currentEvent) ? null : (
//                     <>
//                       {occupied &&
//                       currentEvent &&
//                       j === parseInt(currentEvent.startTime.split(":")[0]) ? (
//                         <EventCard style={style} eventInfo={currentEvent} />
//                       ) : null}
//                     </>
//                   )}
//                 </>
//               </td>
//             );
//           })}
//         </tr>
//       ))}
//     </tbody>
//   );
// };

/* 2nd approach */
import { useUuid } from "../../hooks";
import { formatData } from "../../utils";
import { EventCard } from "../event";
import { IEvent } from "../../interface";

interface ITableHeadProps {
  tableData: IEvent[];
}

export const TableBody = ({ tableData }: ITableHeadProps) => {
  const formattedData = formatData(tableData);
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
