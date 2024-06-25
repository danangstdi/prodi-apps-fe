import Undar from '@/../public/undar.png'
import UndarTV from '@/../public/undar tv2.jpg'
import MerdekaBelajar from '@/../public/merdeka-belajar.png'
import KampusMerdeka from '@/../public/kampus-merdeka.png'
import Image from 'next/image'

export default function Part() {
  return (
    <section className=''>
      <div className='flex items-center justify-center gap-10'>
        <Image src={Undar} className='w-14 h-14' alt='' />
        <Image src={UndarTV} className='w-28 h-fit' alt='' />
        <Image src={MerdekaBelajar} className='w-24 h-fit' alt='' />
        <Image src={KampusMerdeka} className='w-28 h-fit' alt='' />
      </div>
    </section>
  )
}
