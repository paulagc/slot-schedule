import {
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { StoreContext } from "../store/storeContext";
import ITask from "../interfaces/ITask";
import { useContext, useState } from "react";

const Slot = ({ id, name }: { id: number; name: string }) => {
  const { tasks, setTasks } = useContext(StoreContext);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  const [editActive, setEditActive] = useState(false);
  const [newTitle, setNewTitle] = useState<string>(name);

  const handleDelete = (e: any) => {
    e.preventDefault();
    const modifiedTasks: ITask[] = [...tasks];
    const taskIndex = modifiedTasks.findIndex((item: ITask) => id === item.id);
    modifiedTasks.splice(taskIndex, 1);
    setTasks(modifiedTasks);
  };

  const handleNameSubmit = (e: any) => {
    if (e.key === "Enter") {
      const modifiedTasks: ITask[] = [...tasks];
      const taskIndex: number = modifiedTasks.findIndex(
        (item: ITask) => id === item.id
      );
      let taskTemp = modifiedTasks[taskIndex];
      taskTemp.title = newTitle;
      modifiedTasks[taskIndex] = taskTemp;
      setTasks(modifiedTasks);
      setNewTitle("");
      setEditActive(false);
    }
  };

  return (
    <Card ref={drag} style={{ backgroundColor: isDragging ? "grey" : "white" }}>
      <CardContent>
        <Typography
          variant="subtitle1"
          component="div"
          onDoubleClick={() => setEditActive(true)}
        >
          {editActive ? (
            <TextField
              style={{ maxWidth: "150px" }}
              required
              id="outlined-required"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => handleNameSubmit(e)}
            />
          ) : (
            name
          )}
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
