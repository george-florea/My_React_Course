import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  // const { data, loading, error } = useFetch(
  //   "https://api.theffstapi.com/v1/images/search?limit=10"
  // );

  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Typography variant="h4" textAlign={"center"}>
        Iubesc pisiki
      </Typography>
      {loading ? (
        <Typography variant="h4" textAlign={"center"}>
          Loading
        </Typography>
      ) : error ? (
        <>{error.toString()}</>
      ) : (
        data.length != 0 && (
          <ImageList sx={{ width: 900, height: 600 }} cols={3} rowHeight={250}>
            {data.map((cat) => (
              <ImageListItem key={cat.id}>
                <img src={cat.url} loading="lazy" height={100} width={100} />
              </ImageListItem>
            ))}
          </ImageList>
        )
      )}
    </Box>
  );
};

export default App;
