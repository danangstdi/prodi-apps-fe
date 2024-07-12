import Footer from "@/app/components/layouts/Footer"
import Navbar from "@/app/components/layouts/Navbar"
import { getWebConfig } from "@/app/services/getWebConfig";

export default async function page() {
  const configs = await getWebConfig();
  const config = configs.data.biography;
  const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quidem! Quos et beatae cupiditate voluptates sequi atque est inventore ab necessitatibus ex, pariatur quaerat esse in illum rem adipisci cum mollitia obcaecati, eum aperiam architecto iusto nisi sed? Perspiciatis, voluptates repellendus doloremque sapiente neque doloribus. Consectetur fugiat nisi necessitatibus ipsam tempora quod assumenda hic dolores. Suscipit possimus dolore asperiores illum optio porro. Laudantium iste, ab odit harum facere perspiciatis. Reprehenderit architecto aliquam, debitis nemo ad iusto odio laborum ex dolorem beatae optio provident asperiores iste, maiores ipsum consequuntur numquam sunt assumenda? Numquam sit dolorum quaerat atque itaque maxime at quisquam."
  
  return (
    <>
      <Navbar active="Tentang Kami"/>
      <main className="px-4 md:mx-20 lg:mx-36 xl:mx-80">
        <div className="py-10 flex flex-col gap-10">
          <div>
            <h5 className="text-2xl poppins-bold mb-3">Visi</h5>
            <p className="ml-10">
              {config && config.vision || lorem}
            </p>
          </div>
          <hr className="border-2"/>
          <div className="">
            <h5 className="text-2xl poppins-bold mb-3">Misi</h5>
            <div className="ml-10">
              {config && config.mission || lorem}
            </div>
          </div>
          <hr className="border-2"/>
          <div className="">
            <h5 className="text-2xl poppins-bold mb-3">Sejarah</h5>
            <div className="ml-10">
              {config && config.history || lorem}
            </div>
          </div>
          <hr className="border-2"/>
          <div className="">
            <h5 className="text-2xl poppins-bold mb-3">Tujuan</h5>
            <div className="ml-10">
              {config && config.goal || lorem}
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
