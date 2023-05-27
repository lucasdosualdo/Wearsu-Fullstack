import { createContext, useContext, useState, useMemo } from "react";

const ModalsContext = createContext();

export function ModalsProvider({ children }) {
  const [openCreation, setOpenCreation] = useState(false);

  const contextValue = useMemo(
    () => ({
      openCreation,
      setOpenCreation,
    }),
    [openCreation]
  );

  return (
    <ModalsContext.Provider value={contextValue}>
      {children}
    </ModalsContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalsContext);
  if (!context) throw new Error("ModalsContext not found");
  return context;
}
