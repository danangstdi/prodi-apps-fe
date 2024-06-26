import Footer from "@/app/components/layouts/Footer"
import Navbar from "@/app/components/layouts/Navbar"

export default function page() {
  return (
    <>
      <Navbar/>
      <main className="px-4 md:mx-20 lg:mx-36 xl:mx-80">
        <div className="py-10 flex flex-col gap-10">
          <div>
            <h5 className="text-2xl poppins-bold mb-3">Visi</h5>
            <p className="ml-10">
              Menjadi Program Studi yang berdaya saing internasional dan berkontribusi kepada pengembangan Teknologi Informasi dan Ilmu Komputer untuk menunjang industri dan masyarakat dengan menyelaraskan pelaksanaan Pendidikan, Penelitian, dan Pengabdian kepada Masyarakat
            </p>
          </div>
          <hr  className="border-2"/>
          <div className="">
            <h5 className="text-2xl poppins-bold mb-3">Misi</h5>
            <ul className="list-decimal ml-10">
              <li>
                Menyelenggarakan pendidikan di bidang Teknologi Informasi dan Ilmu Komputer yang berkualitas dan berstandar internasional secara berkelanjutan.
              </li>
              <li>
                Meningkatkan kemampuan sivitas akademika dalam pengembangan penelitian dan pengabdian yang selaras dengan kebutuhan industri dan masyarakat.
              </li>
              <li>
                Mengintegrasikan pengembangan pendidikan, penelitian, dan pengabdian kepada masyarakat yang ditunjang dengan tatakelola organisasi yang transparan, akuntabel, efektif, dan efisien.
              </li>
            </ul>
          </div>
          <hr  className="border-2"/>
          <div className="">
            <h5 className="text-2xl poppins-bold mb-3">Tujuan</h5>
            <ul className="list-decimal ml-10">
              <li>
                Menyelenggarakan pendidikan di bidang Teknologi Informasi dan Ilmu Komputer yang berkualitas dan berstandar internasional secara berkelanjutan.
              </li>
              <li>
                Meningkatkan kemampuan sivitas akademika dalam pengembangan penelitian dan pengabdian yang selaras dengan kebutuhan industri dan masyarakat.
              </li>
              <li>
                Mengintegrasikan pengembangan pendidikan, penelitian, dan pengabdian kepada masyarakat yang ditunjang dengan tatakelola organisasi yang transparan, akuntabel, efektif, dan efisien.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
