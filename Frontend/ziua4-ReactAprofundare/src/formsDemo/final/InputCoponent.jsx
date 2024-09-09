import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
const InputCoponent = ({ labelText, state, handleChange }) => {
  return (
    <FormControl margin="normal">
      <InputLabel htmlFor="my-input">{labelText}</InputLabel>
      <Input
        value={state.value}
        variant="standard"
        id="my-input"
        aria-describedby="my-helper-text"
        onChange={(e) => handleChange(e.target.value)}
      />
      {state?.errors?.map((err, index) => (
        <FormHelperText
          style={{ color: "red" }}
          key={index}
          id="my-helper-text"
        >
          {err}
        </FormHelperText>
      ))}
    </FormControl>
  );
};

export default InputCoponent;
