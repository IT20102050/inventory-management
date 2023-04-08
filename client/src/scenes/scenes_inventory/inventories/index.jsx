import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetInventoriesQuery } from "state/api";
import Header from "components/com_inventory/Header";
import { DataGrid } from "@mui/x-data-grid";

const Inventories = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetInventoriesQuery();
  console.log("data", data);


  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "item_name",
      headerName: "Item Name",
      flex: 0.5,
    },
    {
      field: "total_quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "manufacture_date",
      headerName: "Manufacture Date",
      flex: 1,
      valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
    },
    {
      field: "expire_date",
      headerName: "Expiry Date",
      flex: 1,
      valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Inventories" subtitle="List of all items" />
      <br></br>

      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Inventories;
