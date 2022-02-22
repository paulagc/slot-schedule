import { Typography, Stack, Grid } from "@mui/material";
import { useContext, useRef } from "react";
import { useDrop } from "react-dnd";
import ITask from "../interfaces/ITask";
import { StoreContext } from "../store/storeContext";
import Slot from "./Slot";

const DayColumn = ({ day }: { day: string }) => {
  const { tasks, setTasks } = useContext(StoreContext);
  const taksRef = useRef();
  taksRef.current = tasks;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => addTaskToDay(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTaskToDay = (id: number) => {
    const dropCount = taksRef.current;
    let modifiedTasks: ITask[] =
      dropCount !== undefined ? [...dropCount] : [...tasks];
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
      .filter((item: ITask) => item.day === day)
      .map((item: ITask) => (
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
