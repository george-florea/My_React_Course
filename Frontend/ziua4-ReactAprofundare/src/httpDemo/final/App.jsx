import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://api.thecatapi.com/v1/images/search?limit=10")
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box alignItems={"center"} justifyContent={"center"}>
      <Typography variant="h4" textAlign={"center"}>
        Iubesc pisiki
      </Typography>
      {isLoading ? (
        <Typography variant="h4" textAlign={"center"}>
          Loading
        </Typography>
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
