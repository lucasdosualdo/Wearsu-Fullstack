import * as React from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";
import AddProduct from "../../components/AddProduct";
import { Container, ProductsManagersWrapper } from "./style";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user) {
      return navigate("/signin");
    }
  }, [user]);

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
