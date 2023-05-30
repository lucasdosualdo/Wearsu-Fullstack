import * as React from "react";
import { Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import {
  HeaderBar,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  Wrapper,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import { useAuth } from "../../contexts/AuthContext";
import { usePagination } from "../../contexts/PaginationContext";

export default function Header() {
  const { user, logout } = useAuth();
  const { resetPagination } = usePagination();
  const { resetProducts } = useProducts();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    resetPagination();
    resetProducts();
    navigate(`/signin`);
  };
  return (
    <HeaderBar>
      <Wrapper>
        <Logo style={{ height: "50%" }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Em breve..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Wrapper>

      <Wrapper>
        {user && (
          <Typography variant="h6" sx={{ color: "primary.teal" }}>
            {`Olá, ${user.name}`}
          </Typography>
        )}

        <Button
          size="large"
          sx={{ color: "primary.teal", fontSize: "1.2rem" }}
          onClick={handleLogout}
        >
          <Typography variant="h6" sx={{ color: "primary.teal" }}>
            Sair
          </Typography>
        </Button>
      </Wrapper>
    </HeaderBar>
  );
}
