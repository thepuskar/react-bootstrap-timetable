import { getNthHours, formatDate } from "../../utils";
import { ITableHeadDateProps } from "../../interface";

export const TableHead = ({ date }: ITableHeadDateProps) => {
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
