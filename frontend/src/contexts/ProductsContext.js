import { createContext, useContext, useState, useMemo } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [productsCount, setProductsCount] = useState(0);
  const contextValue = useMemo(
    () => ({
      products,
      setProducts,
      productsCount,
      setProductsCount,
      resetProducts: () => {
        setProducts([]);
        setProductsCount(0);
      },
    }),
    [products, productsCount]
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
