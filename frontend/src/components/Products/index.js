import { Container, ProductWrapper, ImageWrapper, PriceWrapper } from "./style";
import { Typography } from "@mui/material";
import tshirtImage from "../../assets/images/tshirt.png";

export default function Products() {
  return (
    <Container>
      <ProductWrapper>
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
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
      <ProductWrapper></ProductWrapper>
    </Container>
  );
}
