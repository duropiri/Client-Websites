import "./globals.css";
import Navbar from "@/components/Navbar";
import { GlobalStateProvider } from "@/components/GlobalStateContext";
import { cn } from "@/lib/utils";
// import data from '@/data/meta.json'; // Adjust the path as necessary
import data from "../../public/meta.json";
import ContentLoader from "@/components/ContentLoader";
import Footer from "@/components/Footer";

export const metadata = {
  title: data.title,
  description: data.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased dark")}
      >
        <GlobalStateProvider>
          <ContentLoader />
          {children}
        </GlobalStateProvider>
      </body>
    </html>
  );
}
