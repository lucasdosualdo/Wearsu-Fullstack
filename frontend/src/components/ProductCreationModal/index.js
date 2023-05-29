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
import { useProduct } from "../../contexts/ProductContext";
import { useAuth } from "../../contexts/AuthContext";
import { createProduct } from "../../services/createProductApi";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import { updateProduct } from "../../services/updateProductApi";

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

export default function ProductCreationModal({ creation, setCreation }) {
  const [loading, setLoading] = useState(false);
  const { openCreation, setOpenCreation } = useModal();
  const { user } = useAuth();
  const { productInfo, reset } = useProduct();
  const { productsCount, setProductsCount } = useProducts();

  const handleClose = () => {
    setCreation(false);
    reset();
    setOpenCreation(false);
  };

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const body = {
      name: productInfo.name,
      description: productInfo.description,
      price: productInfo.price,
      quantity: productInfo.quantity,
      model: productInfo.model,
      brand: productInfo.brand,
      image_url: productInfo.imageURL,
      user_id: user.id,
    };
    const productId = productInfo.id;
    try {
      if (creation) {
        await createProduct(body, user.token);
        setCreation(false);
      } else {
        await updateProduct(productId, body, user.token);
      }
      setProductsCount(productsCount + 1);
      setLoading(false);
      setOpenCreation(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error("Falha ao adicionar o produto.", {
        progressStyle: {
          backgroundColor: "var(--turquoise)",
        },
      });
    }
  }

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
        Produto
      </BootstrapDialogTitle>

      <DialogContent dividers>
        <ProductForm />
      </DialogContent>

      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancelar
        </Button>
        <Button autoFocus onClick={handleSubmit}>
          Salvar
        </Button>
      </DialogActions>
      <ToastContainer
        transition={Slide}
        autoClose={1500}
        bodyClassName="toast-body"
        icon={false}
      />
    </BootstrapDialog>
  );
}
