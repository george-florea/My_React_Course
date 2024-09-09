import React, { useRef, useState } from "react";
import {
  Alert,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import InputCoponent from "./InputCoponent";
const App = () => {
  const [formState, setFormState] = useState({
    name: {
      value: "",
      errors: [],
    },
    email: {
      value: "",
      errors: [],
    },
    password: {
      value: "",
      errors: [],
    },
    confirmPassword: {
      value: "",
      errors: [],
    },
  });
  const [formIsValid, setFormIsValid] = useState(true);
  const confirmPasswordRef = useRef(null);

  const nameChangeHandler = (value) => {
    let errors = [];
    if (value.length == 0) {
      errors.push("required");
    }
    if (value.length > 15) {
      errors.push("maximum length is 15 characters");
    }
    setFormState({
      ...formState,
      name: {
        value,
        errors,
      },
    });
  };

  const emailChangeHandler = (value) => {
    let errors = [];
    if (value.length == 0) {
      errors.push("required");
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(value)) {
      errors.push("not a valid email");
    }
    setFormState({
      ...formState,
      email: {
        value,
        errors,
      },
    });
  };

  const passwordChangeHandler = (value) => {
    let errors = [];
    if (value.length == 0) {
      errors.push("required");
    }
    if (value != "OIubescPeGrasa@1234") {
      errors.push("parola gresita");
    }
    setFormState({
      ...formState,
      password: {
        value,
        errors,
      },
    });
  };

  const handleSubmit = () => {
    let isValid = true;
    if (confirmPasswordRef.current.value != formState.password.value) {
      setFormState({
        ...formState,
        confirmPassword: {
          value: confirmPasswordRef.current.value,
          errors: ["passwords do not match"],
        },
      });
      isValid = false;
    }
    let errors = Object.entries(formState).map((entry) =>
      entry[0] != "confirmPassword" ? entry[1].errors : []
    );
    isValid &= errors.filter((el) => el.length > 0).length == 0;
    if (!isValid) {
      setFormIsValid(false);
    } else {
      console.log(Object.values(formState).map((el) => el.value));
    }
  };

  return (
    <Stack>
      <InputCoponent
        state={formState["name"]}
        handleChange={nameChangeHandler}
        labelText={"Name"}
      ></InputCoponent>
      <InputCoponent
        state={formState["email"]}
        handleChange={emailChangeHandler}
        labelText={"Email"}
      ></InputCoponent>
      <InputCoponent
        state={formState["password"]}
        handleChange={passwordChangeHandler}
        labelText={"Password"}
      ></InputCoponent>
      <FormControl margin="normal">
        <InputLabel htmlFor="my-input">Confirm password</InputLabel>
        <input
          ref={confirmPasswordRef}
          id="my-input"
          aria-describedby="my-helper-text"
        />
        {formState.confirmPassword?.errors?.map((err, index) => (
          <FormHelperText
            style={{ color: "red" }}
            key={index}
            id="my-helper-text"
          >
            {err}
          </FormHelperText>
        ))}
      </FormControl>
      <Button onClick={handleSubmit} variant="outlined">
        Submit
      </Button>
      {!formIsValid && <Alert severity="error">Enter valid values</Alert>}
    </Stack>
  );
};

export default App;
