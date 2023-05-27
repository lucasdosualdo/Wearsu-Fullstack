import * as React from "react";
import { useState } from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function ProductTypes() {
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">Selecione o tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Selecione o tipo"
          onChange={handleChange}
        >
          <MenuItem value={"Camiseta"}>Camiseta</MenuItem>
          <MenuItem value={"Calça"}>Calça</MenuItem>
          <MenuItem value={"Sapato"}>Sapato</MenuItem>
          <MenuItem value={"Casaco"}>Casaco</MenuItem>
          <MenuItem value={"Outro"}>Outro</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
