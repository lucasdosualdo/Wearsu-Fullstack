import * as React from "react";
import { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";
import { Container, ProductsFilter } from "./style";
import { ThemeProvider } from "@mui/material/styles";
import sortingTheme from "../../themes/sortingTheme";

export default function SortingProducts() {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      <Container>
        <ProductsFilter>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.white", cursor: "pointer" }}
          >
            Todos os produtos
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.white", cursor: "pointer" }}
          >
            Camisetas
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.white", cursor: "pointer" }}
          >
            Calças
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.white", cursor: "pointer" }}
          >
            Sapatos
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.white", cursor: "pointer" }}
          >
            Casacos
          </Typography>
        </ProductsFilter>

        <ThemeProvider theme={sortingTheme}>
          <Box sx={{ minWidth: 200, maxWidth: 200 }}>
            <FormControl
              fullWidth
              sx={{
                borderBottomColor: "white",
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Organizar por
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Organizar por"
                onChange={handleChange}
              >
                <MenuItem value={"Nome (A-Z)"}>Nome (A-Z)</MenuItem>
                <MenuItem value={"Nome (Z-A)"}>Nome (Z-A)</MenuItem>
                <MenuItem value={"Mais recentes"}>Mais recentes</MenuItem>
                <MenuItem value={"Mais antigos"}>Mais antigos</MenuItem>
                <MenuItem value={"Preço (mais baratos)"}>Preço (mais baratos)</MenuItem>
                <MenuItem value={"Preço (mais caros)"}>Preço (mais caros)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}
