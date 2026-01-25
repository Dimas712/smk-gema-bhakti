import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";

export default function WebsiteLayout({ children }) {
  return (
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
          {children}
        <Footer />
      </div>
  );
}
