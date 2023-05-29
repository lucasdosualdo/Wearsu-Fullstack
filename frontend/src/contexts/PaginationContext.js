import { createContext, useContext, useState, useMemo } from "react";

const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const pageSize = 12;
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  const contextValue = useMemo(
    () => ({
      pageSize,
      pagination,
      setPagination,
      resetPagination: () => {
        setPagination({
          count: 0,
          from: 0,
          to: pageSize,
        });
      },
    }),
    [pagination]
  );

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) throw new Error("PaginationContext not found");
  return context;
}
