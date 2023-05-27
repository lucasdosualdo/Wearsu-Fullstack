import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ProductForm from "../ProductForm";

import { useModal } from "../../contexts/ModalsContext";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle({ children, onClose, ...other }) {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function ProductCreationModal() {

  const { openCreation, setOpenCreation } = useModal();

  const handleClose = () => {
    setOpenCreation(false);
  };
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={openCreation}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
        sx={{ textTransform: "uppercase" }}
      >
        Adicionar produto
      </BootstrapDialogTitle>

      <DialogContent dividers>
        <ProductForm />
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <Button autoFocus onClick={handleClose}>
          Salvar
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
