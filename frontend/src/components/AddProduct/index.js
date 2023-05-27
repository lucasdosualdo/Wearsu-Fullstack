import * as React from "react";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddProductWrapper } from "./style";
import ProductCreationModal from "../ProductCreationModal";
import { useModal } from "../../contexts/ModalsContext";

export default function AddProduct() {
  const { setOpenCreation } = useModal();

  const handleClickOpen = () => {
    setOpenCreation(true);
  };

  return (
    <AddProductWrapper>
      <Fab
        size="medium"
        aria-label="add"
        sx={{ color: "primary.turquoise", zIndex: "0" }}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>

      <Typography variant="subtitle1" sx={{ color: "primary.white" }}>
        Adicionar produto
      </Typography>
      <ProductCreationModal />
    </AddProductWrapper>
  );
}
