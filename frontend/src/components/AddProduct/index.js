import * as React from "react";
import { useState } from "react";
import { Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddProductWrapper } from "./style";
import ProductCreationModal from "../ProductCreationModal";

export default function AddProduct() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
      <ProductCreationModal open={open} setOpen={setOpen} />
    </AddProductWrapper>
  );
}
