import { CheckInContextProvider } from "@/components/contexts/CheckInContext";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const Nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Cardápio Online",
  description:
    "Projeto acadêmico, desafio para desenvolver uma solução de cardápio online para bares e restaurantes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Nunito.className}>
        <CheckInContextProvider>{children}</CheckInContextProvider>
      </body>
    </html>
  );
}
