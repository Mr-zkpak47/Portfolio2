import "./globals.css";
import { personalData } from "@/data/page-data";
import Sidebar from "../components/sidebar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Next",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3 ml-auto">{children}</main>
      </body>
    </html>
  );
}
