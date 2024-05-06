
import type { Metadata } from "next";
 
import Header from "@/components/core/Header";
 
export const metadata: Metadata = {
  title: "Reshine / Admin",
  description: "Generated by create next app",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header isAuthenticated={true}/>
        {children}
    </>
  );
}
