import Navbar from "@/components/navbar";
import SectionOne from "@/components/Section1";
import "./globals.css";
import SectionTwo from "@/components/Section2";
import Line from "@/components/line";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="background">
      <Navbar />
      <SectionOne />
      <Line />
      <SectionTwo />
      <Footer />
    </div>
  );
}
