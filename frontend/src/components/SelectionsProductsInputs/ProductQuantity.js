import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useProduct } from "../../contexts/ProductContext";

export default function ProductQuantity() {
  const quantity = Array.from({ length: 100 }, (_, index) => index + 1);
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
          Selecione a quantidade
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={productInfo.quantity}
          label="Selecione a quantidade"
          onChange={handleInputChange}
          name="quantity"
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
