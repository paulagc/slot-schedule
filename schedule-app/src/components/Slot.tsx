import { Card, CardContent, Typography } from "@mui/material";
import { useDrag } from "react-dnd";

const Slot = ({ id, name }: { id: number; name: string }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <Card ref={drag}  style={{ backgroundColor: isDragging ? "grey" : "white" }}>
      <CardContent>
        <Typography variant="subtitle1" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Slot;
