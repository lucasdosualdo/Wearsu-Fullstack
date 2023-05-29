import { createContext, useContext, useState, useMemo } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const contextValue = useMemo(
    () => ({
      products,
      setProducts,
      resetProducts: () => {
        setProducts([]);
      },
    }),
    [products]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("ProductsContext not found");
  return context;
}
