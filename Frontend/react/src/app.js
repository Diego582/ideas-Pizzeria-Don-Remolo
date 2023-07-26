import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Menu from "./views/home";



const App = () => {

  return (
    <Box>
      <Routes>
        <Route
          path="/"
          element={<Menu />}
        ></Route>

      </Routes>
    </Box>
  );
};

export default App;
