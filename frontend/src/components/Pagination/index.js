import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { usePagination } from "../../contexts/PaginationContext";
import { getProducts } from "../../services/getProductsApi";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";

export default function BasicPagination() {
  const { pageSize, pagination, setPagination } = usePagination();
  const { token } = useAuth();
  const { setProducts } = useProducts();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const promise = await getProducts(token, pagination);
        setPagination({ ...pagination, count: promise.totalProducts });
        setProducts(promise.products);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchProducts();
  }, [pagination.from, pagination.to, token]);

  function handlePageChange(event, page) {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from, to });
  }
  return (
    <Container>
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
});
