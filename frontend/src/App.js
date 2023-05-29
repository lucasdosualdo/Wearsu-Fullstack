import Home from "./pages/Home";
import { ModalsProvider } from "./contexts/ModalsContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ProductProvider } from "./contexts/ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <ModalsProvider>
        <AuthProvider>
          <ProductProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </BrowserRouter>
          </ProductProvider>
        </AuthProvider>
      </ModalsProvider>
    </>
  );
}

export default App;
