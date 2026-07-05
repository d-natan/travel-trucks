"use client";

import { ReactNode, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";

type Props = {
  children: ReactNode;
};

export default function QueryProvider({ children }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />
    </QueryClientProvider>
  );
}
