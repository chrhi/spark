"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { Next13ProgressBar } from "next13-progressbar";

const queryClient = new QueryClient();

const EditorProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Next13ProgressBar
        height="5px"
        color="#3b82f6"
        options={{ showSpinner: false }}
        showOnShallow
      />
      {children}
    </QueryClientProvider>
  );
};

export default EditorProviders;
