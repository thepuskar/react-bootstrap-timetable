import { TableHeadDate } from "../../data";
import { getNthHours } from "../../utils";

interface ITableHeadDate {
  date: string;
  key: number;
}

export const TableHead = () => {
  const nthHours = getNthHours(TableHeadDate?.length);

  return (
    <thead>
      <tr className="date">
        <th className="room">Room</th>
        {TableHeadDate?.map((item: ITableHeadDate) => (
          <th colSpan={24} className="text-center" key={item?.key}>
            {item?.date}
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
