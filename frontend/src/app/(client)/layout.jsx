import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
    <Navbar />
      {children}
      <Footer />
    </>
  );
}