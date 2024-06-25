"use client"

import Link from 'next/link';
import Tag from './_partials/Tag';
import Creator from './_partials/Creator';
import Card from './_partials/Card';
import Cover from '@/../public/hero.jpg'
import Image from 'next/image';
import Navbar from '@/app/components/layouts/Navbar';
import Footer from '@/app/components/layouts/Footer';

export default function Page({params: {article}}) {
  
  return (
    <>
      <Navbar/>
      <main className='pt-24 md:pt-28 px-4 md:mx-20 lg:mx-36 xl:mx-80'>
        <h1 className='poppins-bold text-3xl lg:text-4xl'>
          Siap Pertahankan Juara, Tim Sapuangin ITS Luncurkan Mobil Terbarunya
        </h1>
        <Creator name='Danang Setiadi' publish="02 Juni 2024"/>
        <hr className='mt-4 border'/>
        <article className='mt-10' >
          <Image src={Cover} alt='' loading='lazy' className='w-full h-full my-5 rounded-2xl'/>
          <div className='text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptates, fugit nostrum corrupti repudiandae rem animi ex, cumque tempore est aut reiciendis dolorem. Quaerat odio porro consequuntur? Ullam minima aperiam recusandae ipsa eligendi vero quaerat, magnam quidem eius harum autem tempore aut ab, saepe nobis, fuga facere obcaecati! Cum quos quisquam, alias iste voluptatem magni pariatur laudantium aliquam voluptatibus dolorum quae, minus consequatur voluptate quasi ex corrupti nobis optio totam tempora ipsam necessitatibus. Repellendus veritatis quis, provident quas rem reprehenderit numquam sequi fugiat, sunt similique velit voluptatem, id soluta ratione temporibus doloremque error cum? Quod repellat facere quos architecto quam consequuntur ratione corrupti neque harum optio in, dolorem eaque unde, aperiam, voluptatum ipsam assumenda accusamus sed fugiat eum id? Repellendus error sunt esse libero, obcaecati inventore sed, nam exercitationem perferendis quod quas laborum. Dicta beatae eaque aliquid exercitationem nihil vero eos voluptatem veritatis porro, non sapiente ab odit mollitia quidem temporibus sed, esse asperiores dignissimos officiis a. Eligendi quas officia exercitationem alias dicta quos necessitatibus dolor deleniti eaque, ratione officiis. Dignissimos, possimus tempore omnis earum eos veritatis eius, voluptates eaque debitis repellat consequuntur voluptas quibusdam incidunt! Reprehenderit possimus, autem asperiores cupiditate temporibus recusandae consequatur architecto, expedita ad ducimus, ipsam sed.
          </div>
        </article>
       <Tag/>
      </main>
      <section className='mt-10'>
        <div className='pt-20 px-4 md:mx-20 lg:mx-36 xl:mx-80 pb-20'>
          <h5 className='font-semibold text-xl mb-6'>Baca juga :</h5>
          <div className='grid md:grid-cols-2 md:gap-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
