interface IEventProps {
  eventInfo: any;
}
export const EventCard = ({ eventInfo }: IEventProps) => {
  const COLOR = ["blue", "orange", "green", "pink", "brown"];

  const color = COLOR[Math.floor(Math.random() * COLOR.length)];

  return (
    <div className="eventholder">
      <div className={`card ${color}`}>
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
