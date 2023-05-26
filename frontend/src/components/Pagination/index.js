import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import styled from "@emotion/styled";

export default function BasicPagination() {
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={10}
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
