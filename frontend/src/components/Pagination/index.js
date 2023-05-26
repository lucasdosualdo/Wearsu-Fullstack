import * as React from "react";
import { Pagination, Stack } from "@mui/material";
import styled from "@emotion/styled";

export default function PaginationComponent() {
  return (
    <Container>
      <Stack spacing={2}>
        <Pagination
          count={10}
          shape="rounded"
          color="primary"
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
  padding: "20px 0",
  display: "flex",
  justifyContent: "flex-end",
});
