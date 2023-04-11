import { CircularProgress, Stack, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Stack alignItems={"center"}>
      <CircularProgress size={50} color="success" />
      <Typography p={3} variant="h4">
        LOADING...
      </Typography>
    </Stack>
  );
};

export default Loading;
