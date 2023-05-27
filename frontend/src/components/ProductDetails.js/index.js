import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ImageWrapper, DetailsWrapper, StyledModal } from "./style";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import tshirtImage from "../../assets/images/tshirt.png";
import { useModal } from "../../contexts/ModalsContext";

export default function ProductDetails({ open, handleClose }) {
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
          <img src={tshirtImage} alt="product" />
        </ImageWrapper>

        <DetailsWrapper>
          <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
            Nome do produto
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textTransform: "uppercase" }}
          >
            Marca
          </Typography>
          <EditOutlinedIcon
            fontSize="large"
            onClick={handleEditClick}
            sx={{ cursor: "pointer" }}
          />
          <DeleteForeverOutlinedIcon
            fontSize="large"
            sx={{ cursor: "pointer" }}
          />
        </DetailsWrapper>
      </StyledModal>
    </Modal>
  );
}
