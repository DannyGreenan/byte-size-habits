import "./globals.css";
import { UserProvider } from "./context/UserContext";
import { EnergyProvider } from "./context/EnergyContext.js";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Byte Size Habits",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <UserProvider>
          <EnergyProvider>{children}</EnergyProvider>
        </UserProvider>
      </body>
    </html>
  );
}
