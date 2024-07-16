import Creator from './_partials/Creator';
import Navbar from '@/app/components/layouts/Navbar';
import Footer from '@/app/components/layouts/Footer';
import Card from './_partials/Card';
import { getMoU } from '@/app/services/getMoU';

export default async function Page({params: {kerjasama}}) {
  const MoU = await getMoU('/' + kerjasama);

  return (
    <>
      <Navbar active="Berita"/>
      <main className='pt-24 md:pt-20 px-4 md:mx-20 lg:mx-36 xl:mx-80'>
        <h1 className='poppins-bold text-3xl lg:text-4xl'>
          {MoU.data.title}
        </h1>
        <Creator name={MoU.data.author.name} publish={MoU.data.created_at.full}/>
        <hr className='mt-4 border'/>
        <main className='my-10' >
          <img src={MoU.data.thumbnail} alt='' loading='lazy' className='w-full h-full my-5 rounded-2xl'/>
          <article className='text-justify' dangerouslySetInnerHTML={{ __html:MoU.data.content.full }}></article>
        </main>
      </main>
      <Footer/>
    </>
  )
}
