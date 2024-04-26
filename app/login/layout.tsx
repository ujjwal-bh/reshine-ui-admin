
import type { Metadata } from "next";
 
import Header from "@/components/core/Header";
 
 
export const metadata: Metadata = {
  title: "Reshine / Admin - Login",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header isAuthenticated={false} />
        {children}
    </>
      
  );
}