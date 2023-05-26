import * as React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { HeaderBar, Search, SearchIconWrapper, StyledInputBase } from "./style";

export default function Header() {
  return (
    <HeaderBar>
      <Logo style={{ height: "50%" }} />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Pesquisar..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Button size="large" sx={{ color: "primary.teal", fontSize: "1.2rem" }}>
        Login
      </Button>
    </HeaderBar>
  );
}
