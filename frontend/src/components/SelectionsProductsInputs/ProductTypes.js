import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { useProduct } from "../../contexts/ProductContext";

export default function ProductTypes() {
  const { productInfo, setProductInfo } = useProduct();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth margin="normal">
        <InputLabel id="demo-simple-select-label">
          Selecione o modelo
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={productInfo.model}
          label="Selecione o modelo"
          name="model"
          onChange={handleInputChange}
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
