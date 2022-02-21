import { Typography, Stack, Grid } from "@mui/material";
import { useDrop } from "react-dnd";
import ITask from "../interfaces/ITask";
import Slot from "./Slot";

const DayColumn = ({
  day,
  tasks,
  setTasks,
}: {
  day: string;
  tasks: ITask[];
  setTasks: any;
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => addTaskToDay(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTaskToDay = (id: number) => {
    let modifiedTasks: ITask[] = [...tasks];
    const taskIndex: number = modifiedTasks.findIndex(
      (item: ITask) => id === item.id
    );
    let taskTemp = modifiedTasks[taskIndex];
    taskTemp.day = day;
    modifiedTasks[taskIndex] = taskTemp;
    setTasks(modifiedTasks);
  };

  const getTasks = () => {
    return tasks
      .filter((item) => item.day === day)
      .map((item) => (
        <Slot key={item.id} id={item.id} name={item.title} />
      ));
  };

  return (
    <Grid item ref={drop} padding={1}>
      <Stack spacing={2}>
        <Typography variant="h6" component="div">
          {day}
        </Typography>
        {getTasks()}
      </Stack>
    </Grid>
  );
};

export default DayColumn;
