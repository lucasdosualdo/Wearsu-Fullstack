import { TextField } from "@mui/material";
import { Container } from "./style";
import ProductQuantity from "../SelectionsProductsInputs/ProductQuantity";
import ProductTypes from "../SelectionsProductsInputs/ProductTypes";
export default function ProductForm() {
  return (
    <Container>
      <TextField
        fullWidth
        label="Nome do produto"
        id="fullWidth"
        margin="normal"
      />
      <TextField fullWidth label="Preço (R$)" id="fullWidth" margin="normal" />
      <TextField fullWidth label="Marca" id="fullWidth" margin="normal" />
      <TextField
        fullWidth
        label="Insira uma imagem (URL)"
        id="fullWidth"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Descrição"
        id="fullWidth"
        margin="normal"
        multiline
      />
      <ProductQuantity />
      <ProductTypes />
    </Container>
  );
}
