import * as React from "react";
import { TextField } from "@mui/material";
import { Container } from "./style";
import ProductQuantity from "../SelectionsProductsInputs/ProductQuantity";
import ProductTypes from "../SelectionsProductsInputs/ProductTypes";
import { useProduct } from "../../contexts/ProductContext";

export default function ProductForm() {
  const { productInfo, setProductInfo } = useProduct();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container>
      <TextField
        fullWidth
        label="Nome do produto"
        id="fullWidth"
        margin="normal"
        name="name"
        value={productInfo.name}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Preço (R$)"
        id="fullWidth"
        margin="normal"
        name="price"
        value={productInfo.price}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Marca"
        id="fullWidth"
        margin="normal"
        name="brand"
        value={productInfo.brand}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Insira uma imagem (URL)"
        id="fullWidth"
        margin="normal"
        name="imageURL"
        value={productInfo.imageURL}
        onChange={handleInputChange}
      />
      <TextField
        fullWidth
        label="Descrição"
        id="fullWidth"
        margin="normal"
        multiline
        name="description"
        value={productInfo.description}
        onChange={handleInputChange}
      />
      <ProductQuantity />
      <ProductTypes />
    </Container>
  );
}
