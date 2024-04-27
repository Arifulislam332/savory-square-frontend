import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Rubik } from "next/font/google";
import "./globals.css";
import MyAuth0Provider from "@/providers/MyAuth0Provider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Savory Square",
  description: "Food ordering web app.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <MyAuth0Provider>
        <html lang="en" className="scroll-smooth">
          <body className={rubik.className}>
            <Toaster visibleToasts={1} richColors position="top-right" />
            <main className="min-h-screen flex flex-col">
              <Header />
              <div className="flex-1">{children}</div>
            </main>
            <Footer />
          </body>
        </html>
      </MyAuth0Provider>
    </ReactQueryProvider>
  );
};

export default RootLayout;
