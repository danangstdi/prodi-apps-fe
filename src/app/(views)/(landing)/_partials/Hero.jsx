"use client"

import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

import Banner from '@/../public/hero.jpg'
import Image from 'next/image'

export default function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://prodi-apps.test/api/v2/banner')
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setData(data.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (data.length === 0) {
    return <div className='w-full h-[37rem] object-cover cursor-pointer'>
    {/* <div className='flex justify-center items-center text-gray-600 bg-slate-300 mt-20 h-44 rounded-xl sm:h-56 md:mx-4 lg:mt-6 aspect-[16/6] w-full md:aspect-auto md:h-64 lg:h-[300px] xl:h-[460px]'> */}
              No Content
            </div>;
  }

  return (
    <section className=''>
      <Swiper 
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet swiper-pagination-testClass' }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {data.map((banner) => (
          <SwiperSlide key={banner.hash}>
            <img src={banner.img} alt='' className='w-full h-[37rem] object-cover cursor-pointer' />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
