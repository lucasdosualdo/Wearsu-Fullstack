import styled from "@emotion/styled";

export const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "20px",
});

export const ProductsFilter = styled("ul")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "20px",
  textTransform: "uppercase",
});
