import * as React from "react";
import { useState } from "react";
import { Container, ProductWrapper, ImageWrapper, PriceWrapper } from "./style";
import { Typography } from "@mui/material";
import ProductDetails from "../ProductDetails.js";
import { useProducts } from "../../contexts/ProductsContext";

export default function Products() {
  const [open, setOpen] = useState(false);

  const { products } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleOpen(product) {
    setSelectedProduct(product);
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <Container>
      {products.length > 0 &&
        products.map((product) => {
          let formatedPrice = Number(product.price).toFixed(2);
          formatedPrice = formatedPrice.replace(".", ",");

          return (
            <>
              <ProductWrapper onClick={() => handleOpen(product)}>
                <ImageWrapper>
                  <img src={product.image_url} alt="product" />
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
                  {product["name"].toUpperCase()}
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
                  {product["brand"].toUpperCase()}
                </Typography>
                <PriceWrapper>{`R$ ${formatedPrice}`}</PriceWrapper>
              </ProductWrapper>
            </>
          );
        })}
      {products.length === 0 && (
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.lightgray",
            marginLeft: "10px",
          }}
        >
          Você ainda não possui nenhum produto adicionado.
        </Typography>
      )}
      <ProductDetails
        open={open}
        handleClose={handleClose}
        product={selectedProduct}
      />
    </Container>
  );
}
