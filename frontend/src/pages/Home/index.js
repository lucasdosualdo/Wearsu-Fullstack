import * as React from "react";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Header from "../../components/Header";
import styled from "@emotion/styled";
import SortingProducts from "../../components/SortingProducts";
import Pagination from "../../components/Pagination";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <AddProductWrapper>
          <Fab
            size="medium"
            aria-label="add"
            sx={{ color: "primary.turquoise" }}
          >
            <AddIcon />
          </Fab>

          <Typography variant="subtitle1" sx={{ color: "primary.white" }}>
            Adicionar produto
          </Typography>
        </AddProductWrapper>
        <SortingProducts />
        <Pagination />
      </Container>
    </>
  );
}

const Container = styled("div")({
  paddingTop: "10vh",
  paddingLeft: "20px",
  paddingRight: "20px",
});

const AddProductWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
