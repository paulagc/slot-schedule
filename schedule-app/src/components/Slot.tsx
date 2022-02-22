import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { StoreContext } from "../store/storeContext";
import ITask from "../interfaces/ITask";
import { useContext } from "react";

const Slot = ({ id, name }: { id: number; name: string }) => {
  const { tasks, setTasks } = useContext(StoreContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const handleDelete = (e: any) => {
    e.preventDefault();
    const modifiedTasks: ITask[] = [...tasks];
    const taskIndex = modifiedTasks.findIndex(
        (item: ITask) => id === item.id
      );
    modifiedTasks.splice(taskIndex, 1);
    setTasks(modifiedTasks);
  };

  return (
    <Card ref={drag} style={{ backgroundColor: isDragging ? "grey" : "white" }}>
      <CardContent>
        <Typography variant="subtitle1" component="div">
          {name}
        </Typography>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={(e: any) => handleDelete(e)}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Slot;
