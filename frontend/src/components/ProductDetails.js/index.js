import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  ImageWrapper,
  DetailsWrapper,
  StyledModal,
  IconsWrapper,
  PriceWrapper,
} from "./style";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useModal } from "../../contexts/ModalsContext";

export default function ProductDetails({ open, handleClose, product }) {
  const { setOpenCreation } = useModal();

  const handleEditClick = () => {
    handleClose();
    setOpenCreation(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledModal>
        <ImageWrapper>
          <img src={product?.image_url} alt="product" />
        </ImageWrapper>

        <DetailsWrapper>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            {product?.name}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textTransform: "uppercase" }}
          >
            {product?.brand}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {product?.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {`Unidades: ${product?.quantity}`}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {`Modelo: ${product?.model}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {`Código: ${product?.reference}`}
          </Typography>
          <IconsWrapper>
            <EditOutlinedIcon
              fontSize="large"
              onClick={handleEditClick}
              sx={{ cursor: "pointer" }}
            />
            <DeleteForeverOutlinedIcon
              fontSize="large"
              sx={{ cursor: "pointer", marginLeft: "10px" }}
            />
          </IconsWrapper>
          <PriceWrapper>
            <Typography variant="h5">{`R$ ${product?.price}`}</Typography>
          </PriceWrapper>
        </DetailsWrapper>
      </StyledModal>
    </Modal>
  );
}
