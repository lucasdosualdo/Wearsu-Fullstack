import * as React from "react";
import { useState } from "react";
import { Container, ProductWrapper, ImageWrapper, PriceWrapper } from "./style";
import { Typography } from "@mui/material";
import tshirtImage from "../../assets/images/tshirt.png";
import ProductDetails from "../ProductDetails.js";

export default function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <ProductWrapper onClick={handleOpen}>
        <ImageWrapper>
          <img src={tshirtImage} alt="product" />
        </ImageWrapper>
        <Typography
          variant="h6"
          sx={{
            color: "primary.black",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginLeft: "10px",
          }}
        >
          Nome do produto
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.black",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            marginLeft: "10px",
          }}
        >
          Marca
        </Typography>
        <PriceWrapper>R$ 50,00</PriceWrapper>
      </ProductWrapper>
      <ProductDetails open={open} handleClose={handleClose} />
    </Container>
  );
}
