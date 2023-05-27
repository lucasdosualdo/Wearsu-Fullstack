import * as React from "react";
import Header from "../../components/Header";
import SortingProducts from "../../components/SortingProducts";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import AddProduct from "../../components/AddProduct";
import { Container } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <AddProduct />
        <SortingProducts />
        <Pagination />
        <Products />
        <Pagination />
      </Container>
    </>
  );
}
