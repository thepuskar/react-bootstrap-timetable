import { useUUID } from "../../hooks";
import { getNthHours, formatDate, currentTime } from "../../utils";
import { ITableHeadDateProps } from "../../interface";

export const TableHead = ({
  date,
  showCurrentTime = true,
}: ITableHeadDateProps) => {
  const uid = useUUID();
  const nthHours = getNthHours(date?.length);

  return (
    <thead>
      <tr className="date">
        <th className="room">Room</th>
        {date?.map((item: Date, i: number) => (
          <th colSpan={24} className="text-center" key={uid + i}>
            {formatDate(item)}
          </th>
        ))}
      </tr>
      <tr>
        <th></th>
        {nthHours?.map((hour, i) => (
          <th
            className={
              !showCurrentTime
                ? ""
                : currentTime.toString() === hour
                ? "currentTime"
                : ""
            }
            key={hour + i}
            data-key={hour}
          >
            {hour}
          </th>
        ))}
      </tr>
    </thead>
  );
};
