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
          <Typography variant="subtitle1" gutterBottom>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Unidades: 15
          </Typography>
          <Typography variant="h6" gutterBottom>
            Modelo: Camiseta
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Referência: NWXZ294
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
            <Typography variant="h5">R$ 50,00</Typography>
          </PriceWrapper>
        </DetailsWrapper>
      </StyledModal>
    </Modal>
  );
}
