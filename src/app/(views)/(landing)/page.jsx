import Footer from "@/app/components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Announcement from "./_partials/Journal";
import Event from "./_partials/Event";
import Hero from "./_partials/Hero";
import News from "./_partials/News";
import Utility from "./_partials/Utility";

export default function Home() {
  return (
    <>
      <Navbar active="Beranda"/>
      <Hero/>
      <News/>
      <div className="grid lg:grid-cols-3 px-5 pt-14 xl:px-32">
        <Announcement/>
        <Event/>
      </div>
      <Utility/>
      <Footer/>
    </>
  );
}
