import { Typography, Stack, Grid } from "@mui/material";
import { useDrop } from "react-dnd";
import Slot from "./Slot";

const DayColumn = ({
  columnName,
  tasks,
}: {
  columnName: string;
  tasks: any[];
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => addTaskToDay(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTaskToDay = (id: number) => {
      console.log(id)
  };
  return (
    <Grid item ref={drop} padding={1}>
      <Stack spacing={2}>
        <Typography variant="h6" component="div" >
          {columnName}
        </Typography>
        {tasks
          .filter((item) => item.status === columnName)
          .map((item) => (
            <Slot id={item.id} name={item.title} />
          ))}
      </Stack>
    </Grid>
  );
};

export default DayColumn;
