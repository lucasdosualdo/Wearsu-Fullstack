import { createContext, useContext, useState, useMemo } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    imageURL: "",
    description: "",
    quantity: "",
    model: "",
    brand: "",
  });

  const contextValue = useMemo(
    () => ({
      productInfo,
      setProductInfo,
      reset: () => {
        setProductInfo({
          name: "",
          price: "",
          imageURL: "",
          description: "",
          quantity: "",
          model: "",
        });
      },
    }),
    [productInfo]
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) throw new Error("ProductContext not found");
  return context;
}
