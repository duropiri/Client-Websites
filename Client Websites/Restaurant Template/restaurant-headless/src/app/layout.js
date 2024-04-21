import "./globals.css";
import { GlobalStateProvider } from "@/components/GlobalStateContext";
import { cn } from "@/lib/utils";
// import data from '@/data/meta.json'; // Adjust the path as necessary
import data from "../../public/meta.json";
import ContentLoader from "@/components/ContentLoader";
import SmoothScrolling from "@/components/SmoothScrolling";


export const metadata = {
  title: data.title,
  description: data.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background font-sans antialiased dark")}>
        <GlobalStateProvider>
          <ContentLoader />
          <SmoothScrolling>
            
            {children}
            
          </SmoothScrolling>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
