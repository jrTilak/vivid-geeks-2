"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const QueryProvider = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export default QueryProvider;
