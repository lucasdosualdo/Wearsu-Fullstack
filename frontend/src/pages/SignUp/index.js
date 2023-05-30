import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/images/logo.svg";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { postSignUp } from "../../services/signUpApi";
import { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      await postSignUp(body);
      setLoading(false);

      toast.success("Cadastro realizado com sucesso!", {
        progressStyle: {
          backgroundColor: "var(--turquoise)",
        },
      });
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      toast.error(
        "Erro ao se cadastrar. Verifique as informações corretamente",
        {
          progressStyle: {
            backgroundColor: "var(--turquoise)",
          },
        }
      );
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundRepeat: "no-repeat",
            background: "linear-gradient(to right ,#f5f5f5 , #a2c3c4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            paddingTop: "30vh",
            width: "100%",
            img: {
              width: "60%",

              objectFit: "cover",
            },
          }}
        >
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "var(--turquoise)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Cadastro
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="name"
                autoFocus
                disabled={loading}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                disabled={loading}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                disabled={loading}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "var(--turquoise)",
                  "&:hover": {
                    backgroundColor: "var(--turquoise)",
                  },
                }}
              >
                Cadastrar
              </Button>

              <Grid item xs>
                <Link variant="body2">
                  <RouterLink to={`/signin`}>
                    Já possui um conta? Clique aqui!
                  </RouterLink>
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        transition={Slide}
        autoClose={1500}
        bodyClassName="toast-body"
        icon={false}
      />
    </ThemeProvider>
  );
}
