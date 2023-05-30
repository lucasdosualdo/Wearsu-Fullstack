import styled from "@emotion/styled";

export const StyledModal = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  minHeight: "45vh",
  maxHeight: "80vh",
  bgcolor: "var(--white)",
  display: "flex",
  boxShadow: 24,
  overflow: "hidden",
  border: "none",
  outline: "none",
  borderRadius: "10px",
  backgroundColor: "var(--white)",
});

export const ImageWrapper = styled("div")({
  width: "40%",
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

export const DetailsWrapper = styled("div")({
  position: "relative",
  width: "60%",
  padding: "15px",
  overflowY: "auto",
  overflowX: "hidden",
  wordWrap: "break-word",
});

export const IconsWrapper = styled("span")({
  position: "absolute",
  top: "15px",
  right: "20px",
});

export const PriceWrapper = styled("div")({
  position: "absolute",
  bottom: "15px",
  right: "20px",
});
