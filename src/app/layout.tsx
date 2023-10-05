import "./globals.css";
import { ABeeZee } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  alternates: {
    canonical: "https://rees.vercel.app",
    languages: {
      "en-US": "/en-US",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate (REES)",
    description: "Real Estate is a real estate company that provides real estate services to its clients.",
    siteId: "1467726470533754880",
    creator: "@el_directo_",
  },
  verification: {
    google: "2T_R5GhrkpqOkgC3cktqb9aWhJ6umlykENu1PvR6ti4",
  },
  openGraph: {
    title: "Real Estate (REES)",
    description: "Real Estate is a real estate company that provides real estate services to its clients.",
    publishedTime: "2023-09-25T00:00:00.000Z",
    authors: ["Tunji"],
  },
  other: {
    "theme-color": "#4A60A1",
    "og:url": "https://rees.vercel.app",
    "og:type": "website",
    "og:title": "Real Estate (REES)",
    "og:description": "Real Estate is a real estate company that provides real estate services to its clients.",
    "og:image": "https://lldfdtyvpeitatttmmnd.supabase.co/storage/v1/object/public/rees/logo.png",
    "og:image:alt": "Real Estate (REES)",
    "og:locale": "en_US",
    "og:site_name": "Real Estate (REES)",
  },
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
