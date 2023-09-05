"use client";

import "./globals.css";
import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProviders } from "@/components/chakra-provider";
import Layout from "@/components/wrapper/Layout";

const inter = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Real Estate (REES)",
  description: "Real Estate is a real estate company that provides real estate services to its clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster
            position="top-right"
            toastOptions={{
              success: {
                style: {
                  background: "green",
                  color: "white",
                },
              },
              error: {
                style: {
                  background: "red",
                  color: "white",
                },
              },
            }}
          />
          <ChakraProviders>
            <Layout>{children}</Layout>
          </ChakraProviders>
        </QueryClientProvider>
      </body>
    </html>
  );
}
