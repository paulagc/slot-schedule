import {
  Dialog,
  DialogTitle,
  TextField,
  MenuItem,
  DialogActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { columnHeaders as days } from "../constants/columnHeaders";

const CreateTaskDialog = ({
  open,
  handleClose,
  handleSubmitTask,
}: {
  open: boolean;
  handleClose: (value: string) => void;
  handleSubmitTask: (newTitle: string, selectedDay: string) => void;
}) => {
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [newTitle, setNewTitle] = useState<string>("");

  const createTask = () => {
    handleSubmitTask(newTitle, selectedDay);
    setNewTitle("");
    setSelectedDay("");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Create a new task</DialogTitle>
      <TextField
        style={{ margin: "20px" }}
        required
        id="outlined-required"
        label="Required"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <TextField
        style={{ margin: "20px" }}
        id="outlined-select-currency"
        select
        label="Select"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {days.map((day) => (
          <MenuItem key={day} value={day}>
            {day}
          </MenuItem>
        ))}
      </TextField>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => createTask()}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CreateTaskDialog;
