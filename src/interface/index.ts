export interface ITableHeadDateProps {
  date: Date[];
  showCurrentTime?: boolean;
}

export interface IEvent {
  campusId: number;
  campusCode: string;
  campusName: string;
  cohortName: string;
  startDate: string;
  finishDate: string;
  startTime: string;
  finishTime: string;
  hasBreak: boolean;
  resourceId: number;
  roomId: number;
  roomType: string;
  roomCode: string;
  roomName: string;
  venueId: number;
  venueCode: string;
  venueDescription: string;
  subjectId: number;
  subjectCode: string;
  subjectName: string;
  moduleId: number;
  moduleCode: string;
  moduleName: string;
  teachereId: number;
  teacherName: string;
}

export interface IRoomData {
  [key: string]: IEvent[];
}
