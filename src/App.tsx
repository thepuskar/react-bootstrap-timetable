import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.min.css";

import { Head, Timetable } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Timetable</h1>
      <div className="row mb-2">
        <div className="col-md-10">
          <Head />
          <Timetable />
        </div>
      </div>
    </div>
  );
}

export default App;
