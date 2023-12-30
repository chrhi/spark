"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const queryClient = new QueryClient();

const StoreProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Next13ProgressBar
        height="5px"
        color="#dc2626"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </QueryClientProvider>
  );
};

export default StoreProvider;
