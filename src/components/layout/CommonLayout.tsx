import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
    children: ReactNode;
}


export default function CommonLayout({children} : IProps) {
  return (
    <div className="bg-red-300 min-h-screen flex flex-col">
        <Navbar/>
        <div className="grow">
          {children}
        </div>
        <Footer/>
    </div>
  )
}
