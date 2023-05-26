import { createTheme } from "@mui/material";

const sortingTheme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-root": {
            color: "white",
            "&:before": {
              borderBottomColor: "white",
            },
            "&:after": {
              borderBottomColor: "white",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white",
          "&:before": {
            borderBottomColor: "white",
          },
          "&:after": {
            borderBottomColor: "white",
          },
        },
      },
    },
  },
});

export default sortingTheme;
