import { columnHeaders as days } from "../constants/columnHeaders";
import { Container, Grid } from "@mui/material";
import DayColumn from "./DayColumn";
import { useState } from "react";
import ITask from "../interfaces/ITask";

const Schedule = () => {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, title: "First Task", day: days[0] },
    { id: 2, title: "Second Task", day: days[1] },
    { id: 3, title: "Third Task", day: days[0] },
    { id: 4, title: "Fourth Task", day: days[2] },
    { id: 5, title: "Fifth Task", day: days[0] },
    { id: 6, title: "Sixth Task", day: days[3] },
    { id: 7, title: "Seventh Task", day: days[3] },
    { id: 8, title: "Eighth Task", day: days[4] },
    { id: 9, title: "Ninth Task", day: days[4] },
    { id: 10, title: "Tenth Task", day: days[5] },
  ]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {days.map((day: string) => (
          <DayColumn
            key={day}
            day={day}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Schedule;
