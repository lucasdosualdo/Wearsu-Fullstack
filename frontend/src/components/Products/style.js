import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Container = styled("div")({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "50px",
});

export const ProductWrapper = styled("div")({
  height: "400px",
  width: "265px",
  backgroundColor: "var(--lightgray)",
  position: "relative",
  borderRadius: "5px",
  overflow: "hidden",
  cursor: "pointer",
});

export const ImageWrapper = styled("div")({
  width: "100%",
  height: "75%",
  backgroundColor: "var(--turquoise)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  },
});

export const PriceWrapper = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "10px",
  right: "10px",
  fontWeight: "bold",
  fontSize: "1.3rem",
}));
