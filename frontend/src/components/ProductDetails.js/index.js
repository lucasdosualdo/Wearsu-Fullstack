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
import { useProduct } from "../../contexts/ProductContext";
import { deleteProduct } from "../../services/deleteProductApi";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";

export default function ProductDetails({ open, handleClose, product }) {
  const { token } = useAuth();
  const { setOpenCreation } = useModal();
  const { productInfo, setProductInfo } = useProduct();
  const { productsCount, setProductsCount } = useProducts();

  let formatedPrice = Number(product?.price).toFixed(2);
  formatedPrice = formatedPrice.replace(".", ",");

  const handleEditClick = () => {
    handleClose();
    setProductInfo({
      id: product.id,
      name: product.name,
      price: product.price,
      imageURL: product.image_url,
      description: product.description,
      quantity: product.quantity,
      model: product.model,
      brand: product.brand,
    });
    setOpenCreation(true);
  };

  const handleDelete = async () => {
    try {
      await deleteProduct(product.id, token);
      setProductsCount(productsCount - 1);
      handleClose();
    } catch (error) {
      console.error(error.message);
    }
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
              onClick={handleDelete}
            />
          </IconsWrapper>
          <PriceWrapper>
            <Typography variant="h5">{`R$ ${formatedPrice}`}</Typography>
          </PriceWrapper>
        </DetailsWrapper>
      </StyledModal>
    </Modal>
  );
}
