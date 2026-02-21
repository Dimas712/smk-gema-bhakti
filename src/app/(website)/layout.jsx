import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function WebsiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
