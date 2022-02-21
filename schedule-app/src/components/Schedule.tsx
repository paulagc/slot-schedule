import { columnHeaders as days } from "../constants/columnHeaders";
import { Container, Grid } from "@mui/material";
import DayColumn from "./DayColumn";

const Schedule = () => {
  const tasks = [
    { id: 1, title: "First Task", status: "Monday" },
    { id: 2, title: "Second Task", status: "Tuesday" },
    {id: 3, title: "Third Task", status: "Monday" },
    { id: 4, title: "Fourth Task", status: "Tuesday" },
    { id: 5, title: "Fifth Task", status: "Wednesday" },
    { id: 6, title: "Sixth Task", status: "Monday" },
    { id: 7, title: "Seventh Task", status: "Tuesday" },
    { id: 8, title: "Eighth Task", status: "Tuesday" },
    { id: 9, title: "Ninth Task", status: "Friday" },
    { id: 10, title: "Tenth Task", status: "Sunday" },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {days.map((columnName: string) => (
          <DayColumn columnName={columnName} tasks={tasks} />
        ))}
      </Grid>
    </Container>
  );
};

export default Schedule;
