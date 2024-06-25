import Footer from "@/app/components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Announcement from "./_partials/Announcement";
import Event from "./_partials/Event";
import Hero from "./_partials/Hero";
import News from "./_partials/News";
// import Part from "./_partials/Part";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      {/* <Part/> */}
      <News/>
      <div className="grid lg:grid-cols-3 px-5 py-14 xl:px-32">
        <Announcement/>
        <Event/>
      </div>
      <Footer/>
    </>
  );
}
