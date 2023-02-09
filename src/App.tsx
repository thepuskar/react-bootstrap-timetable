import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.min.css";

import { DayTable, WeeklyTable } from "./components";

function App() {
  return (
    <div className="App">
      <h3>Day timetable</h3>
      <DayTable />
      <WeeklyTable />
    </div>
  );
}

export default App;
