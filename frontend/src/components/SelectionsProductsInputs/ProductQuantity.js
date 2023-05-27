import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductQuantity() {
  const quantity = Array.from({ length: 100 }, (_, index) => index + 1);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const handleChange = (event) => {
    setSelectedQuantity(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">
          Selecione a quantidade
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedQuantity}
          label="Selecione a quantidade"
          onChange={handleChange}
          MenuProps={{
            style: {
              maxHeight: 220,
            },
          }}
        >
          {quantity.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
