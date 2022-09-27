import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>

      <Footer />
    </div>
  );
}