import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }} margin="5px">
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ color: "white" }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          style={{ color: "white" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
