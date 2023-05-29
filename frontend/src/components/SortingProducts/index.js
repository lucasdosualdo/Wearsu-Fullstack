import * as React from "react";
import { Typography } from "@mui/material";
import { Container, ProductsFilter } from "./style";

export default function SortingProducts() {
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
      </Container>
    </>
  );
}
