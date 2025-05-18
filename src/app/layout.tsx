import type { Metadata } from "next";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { Poppins } from "next/font/google";
import AuthContextProvider from "@/context/AuthContext";
import ReduxProvider from "@/store/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // Specify the font weights you need
});
export const metadata: Metadata = {
  title: "Evident Academy",
  description: "Generated Amin chogueur",
};

type RootLayoutType = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <AuthContextProvider>
            <div
              className={`min-h-screen flex flex-col justify-between relative bg-[var(--mainBg)]`}
            >
              <Header />
              <main className="flex-1 container mx-auto lg:p-10">
                {children}
              </main>
              <Footer />
              <ToastContainer />
            </div>
          </AuthContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
