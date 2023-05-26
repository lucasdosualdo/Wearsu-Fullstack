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
              sx={{ borderBottomColor: "white", color: "white" }}
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
                <MenuItem value={10}>Nome (A-Z)</MenuItem>
                <MenuItem value={20}>Nome (Z-A)</MenuItem>
                <MenuItem value={30}>Mais recentes</MenuItem>
                <MenuItem value={40}>Mais antigos</MenuItem>
                <MenuItem value={50}>Preço (mais baratos)</MenuItem>
                <MenuItem value={60}>Preço (mais caros)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>
        
      </Container>
    </>
  );
}
