import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.min.css";

import { DayTable } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Timetable</h1>

      <h3>Day timetable</h3>
      <DayTable />
    </div>
  );
}

export default App;
