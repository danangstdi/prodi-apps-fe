"use client"

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';

import Banner from '@/../public/hero.jpg'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className=''>
      <Swiper 
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet swiper-pagination-testClass' }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Image src={Banner} quality={100} alt='' className='w-full h-[37rem] object-cover cursor-pointer' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner} quality={100} alt='' className='w-full h-[37rem] object-cover cursor-pointer' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner} quality={100} alt='' className='w-full h-[37rem] object-cover cursor-pointer' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
