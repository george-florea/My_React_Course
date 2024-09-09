import { Stack, Typography } from "@mui/material";
import Demo from "./HomeWork/final/index";
export default function App() {
  return (
    <Stack alignItems={"center"} marginY={10}>
      <Typography variant="h3" component="h4" marginBottom={10}>
        React zero to hero
      </Typography>
      <Demo />
    </Stack>
  );
}
