import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/scenes_inventory/layout";
import Dashboard from "scenes/scenes_inventory/dashboard";
import Inventories from "scenes/scenes_inventory/inventories";
import Medicine from "scenes/scenes_inventory/medicine";
import Food from "scenes/scenes_inventory/food";
import AddMedicine from "scenes/scenes_inventory/medicine/AddMedicine.jsx";
import EditMedicine from "scenes/scenes_inventory/medicine/EditMedicine.jsx";
import AddFood from "scenes/scenes_inventory/food/AddFood.jsx";
import EditFood from "scenes/scenes_inventory/food/EditFood.jsx";
import Status from "scenes/scenes_inventory/status";


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventories" element={<Inventories />} />
              <Route path="/food" element={<Food />} />
              <Route path="/medicine" element={<Medicine />} />
              <Route path="/status" element={<Status />} />
              <Route path="/addMedi" element={<AddMedicine />} />
              <Route path="/editMedi/:id" element={<EditMedicine />} />
              <Route path="/addFood" element={<AddFood />} />
              <Route path="/editFood/:id" element={<EditFood />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
