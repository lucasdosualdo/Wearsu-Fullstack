import * as React from "react";
import { Pagination, Stack, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";
import { usePagination } from "../../contexts/PaginationContext";
import { getProducts } from "../../services/getProductsApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";

export default function BasicPagination() {
  const { pageSize, pagination, setPagination } = usePagination();
  const { token } = useAuth();
  const { setProducts, productsCount, setProductsCount } = useProducts();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const promise = await getProducts(token, pagination);
        setPagination({ ...pagination, count: promise.totalProducts });
        setProducts(promise.products);

        if (productsCount !== promise.totalProducts) {
          setProductsCount(promise.totalProducts);
        }
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [pagination.from, pagination.to, token, productsCount]);

  function handlePageChange(event, page) {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from, to });
  }
  return (
    <Container>
      {loading && (
        <CircularProgress
          size={80}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: "1",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(pagination.count / pageSize)}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "primary.white",
            },
          }}
        />
      </Stack>
    </Container>
  );
}

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "20px 0",
  position: "relative",
});
