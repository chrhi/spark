"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Next13ProgressBar } from "next13-progressbar";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Next13ProgressBar
        height="5px"
        color="#22c55e"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
