import { columnHeaders as days } from "../constants/columnHeaders";
import { Button, Container, Grid } from "@mui/material";
import DayColumn from "./DayColumn";
import { useContext, useState } from "react";
import CreateTaskDialog from "./CreateTaskDialog";
import { StoreContext } from "../store/storeContext";
import ITask from "../interfaces/ITask";
import { getRandomTaskId } from "../utils/getRandomTaskId";

const Schedule = () => {
  const [open, setOpen] = useState(false);
  const { tasks, setTasks } = useContext(StoreContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const handleSubmitTask = (newTitle: string, selectedDay: string) => {
    const modifiedTasks: ITask[] = [...tasks];
    modifiedTasks.push({
      id: getRandomTaskId(),
      title: newTitle,
      day: selectedDay,
    });
    setTasks(modifiedTasks);
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={5}>
        {days.map((day: string) => (
          <DayColumn key={day} day={day} />
        ))}
      </Grid>
      <div style={{ marginTop: "100px", textAlign: "left" }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Create Task
        </Button>
        <CreateTaskDialog
          open={open}
          handleClose={handleClose}
          handleSubmitTask={handleSubmitTask}
        />
      </div>
    </Container>
  );
};

export default Schedule;
