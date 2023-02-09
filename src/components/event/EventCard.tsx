interface IEventProps {
  eventInfo: any;
  style?: any;
}
export const EventCard = ({ eventInfo, style }: IEventProps) => {
  const COLOR = ["blue", "orange", "green", "pink", "brown"];

  const color = COLOR[Math.floor(Math.random() * COLOR.length)];

  return (
    <div className="eventholder" style={style}>
      <div className={`card ${color}`}>
        <div className="card-header p-1">
          {eventInfo?.startTime} to {eventInfo?.finishTime}
        </div>
        <div className="card-body p-1">
          <div className="card-text">
            <strong>B</strong>: {eventInfo?.subjectCode || eventInfo?.startDate}
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
