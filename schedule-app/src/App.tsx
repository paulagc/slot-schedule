import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Schedule from "./components/Schedule";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Schedule />
      </div>
    </DndProvider>
  );
}

export default App;
