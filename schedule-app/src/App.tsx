import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Schedule from "./components/Schedule";
import TasksStoreProvider from "./store/TaksStoreProvider";

function App() {
  return (
    <TasksStoreProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Schedule />
        </div>
      </DndProvider>
    </TasksStoreProvider>
  );
}

export default App;
