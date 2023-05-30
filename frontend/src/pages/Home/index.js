import * as React from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import AddProduct from "../../components/AddProduct";
import { Container, ProductsManagersWrapper } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProductsManagersWrapper>
          <AddProduct />

          <Pagination />
        </ProductsManagersWrapper>

        <Products />
      </Container>
    </>
  );
}
