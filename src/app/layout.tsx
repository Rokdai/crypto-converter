import type { Metadata } from "next";

import { Slide, ToastContainer } from "react-toastify";

import "@/assets/styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Crypto Converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer
          position="top-center"
          autoClose={7000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Slide}
        />
      </body>
    </html>
  );
}
