import React, { createContext, useState } from "react";
import ITask from "../interfaces/ITask";
import { columnHeaders as days } from "../constants/columnHeaders";
import { StoreContext } from "./storeContext";

const TasksStoreProvider = ({ children }: { children: any }) => {
  const defaultTasks = [
    { id: 1, title: "Task 1", day: days[0] },
    { id: 2, title: "Task 2", day: days[1] },
    { id: 3, title: "Task 3", day: days[0] },
    { id: 4, title: "Task 4", day: days[2] },
    { id: 5, title: "Task 5", day: days[0] },
    { id: 6, title: "Task 6", day: days[3] },
    { id: 7, title: "Task 7", day: days[3] },
    { id: 8, title: "Task 8", day: days[4] },
    { id: 9, title: "Task 9", day: days[1] },
    { id: 10, title: "Task 10", day: days[5] },
    { id: 11, title: "Task 11", day: days[3] },
    { id: 12, title: "Task 12", day: days[3] },
  ];

  const [tasks, setTasks] = useState<ITask[]>(defaultTasks);

  return (
    <StoreContext.Provider value={{ tasks, setTasks }}>
      {children}
    </StoreContext.Provider>
  );
};

export default TasksStoreProvider;
