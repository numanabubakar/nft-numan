import React from 'react'
import Header from './(components)/header'
import Image from 'next/image'
import Hero from '../public/hero.svg'
import {GoRocket} from "react-icons/go"
import Button from './(components)/Button/button'
import Trendings from './(components)/trendings/trendings'
import img1 from '@/public/p1.png'
import img2 from '@/public/p2.png'
import img3 from '@/public/img3.png'
import img4 from '@/public/p3.png'
function Home() {
  return (
    <div >
<Header />
<div className='container  py-5 mx-auto grid lg:grid-cols-2 md:grid-cols-1  gap-10'>
<div className='mt-10' >
<h1 className='text-6xl font-bold '>Discover Digital Art & Collect NFTs</h1>
<p className='text-2xl  py-5'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
<div className='w-3/12 py-5'>

<Button title="Get Started " iconComp={<GoRocket />}  />
</div>
<div className='flex justify-between w-9/12 py-4' >
  <div className='text-3xl'><p className='font-bold'>240k+</p> <p>Total Sale</p></div>
  <div className='text-3xl'> <p className='font-bold'>100k+</p> <p>Auctions</p></div>
  <div className='text-3xl'> <p className='font-bold'> 240k+</p><p>Artists</p></div>
</div>
</div>
<div className='mx-auto'>

<Image  src={Hero} alt='hero' height={450}/>
</div>


</div>
<div className='container py-5 mx-auto'>
<h1 className='text-3xl font-bold py-2'> Trendings Collection</h1>
<p className='text-light'>Checkout our weekly updated trending collection.</p>
</div>
<div className='container py-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
<Trendings src1={img1.src} src2={img2.src}  heading="DSGN Animals"/>
<Trendings src1={img3.src} src2={img3.src} heading="Magic Mushrooms"/>
<Trendings src1={img4.src} src2={img4.src}  heading="Disco Machines"/>

</div>

    </div>
  )
}

export default Home