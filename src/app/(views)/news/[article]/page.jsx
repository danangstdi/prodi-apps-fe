import Link from 'next/link';
import Tag from './_partials/Tag';
import Creator from './_partials/Creator';
import Navbar from '@/app/components/layouts/Navbar';
import Footer from '@/app/components/layouts/Footer';
import { getSingleArticle } from '@/app/services/getSingleArticle';
import { getArticle } from '@/app/services/getArticle';
import Card from '../_partials/Card';

export default async function Page({params: {article}}) {
  const getArticleByParam = await getSingleArticle(article);
  const moreArticle = await getArticle('?limit=4');

  return (
    <>
      <Navbar/>
      <main className='pt-24 md:pt-20 px-4 md:mx-20 lg:mx-36 xl:mx-80'>
        <h1 className='poppins-bold text-3xl lg:text-4xl'>
          {getArticleByParam.data.title}
        </h1>
        <Creator name={getArticleByParam.data.author.name} publish={getArticleByParam.data.created_at.full}/>
        <hr className='mt-4 border'/>
        <main className='mt-10' >
          <img src={getArticleByParam.data.thumbnail} alt='' loading='lazy' className='w-full h-full my-5 rounded-2xl'/>
          <article className='text-justify' dangerouslySetInnerHTML={{ __html:getArticleByParam.data.content.full }}></article>
        </main>
       <Tag/>
      </main>
      <section className='mt-10'>
        <div className='pt-20 px-4 md:mx-20 lg:mx-36 xl:mx-80 pb-20'>
          <h5 className='font-semibold text-xl mb-6'>Baca juga :</h5>
          <div className='grid md:grid-cols-2 md:gap-4'>
            {moreArticle.data.data.map((moreArticleData) => (
              <Card 
                href={moreArticleData.url} 
                img={moreArticleData.thumbnail} 
                title={moreArticleData.title}
                short={moreArticleData.content.short}
                created_at={moreArticleData.created_at.full.split(',')[0]}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
