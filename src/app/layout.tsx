import "./globals.css";
import { ABeeZee } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProviders } from "@/components/chakra-provider";
import Layout from "@/components/wrapper/Layout";
import { ReactQueryProvider } from "@/components/reactquery-provider";
import { Metadata } from "next";

const inter = ABeeZee({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Real Estate (REES)",
  description: "Real Estate is a real estate company that provides real estate services to its clients.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        <ReactQueryProvider>
          <ChakraProviders>
            <Layout>{children}</Layout>
          </ChakraProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
