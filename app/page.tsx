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
import p5 from '@/public/p5.png'
import p6 from '@/public/p6.png'
import p7 from '@/public/p7.png'
import p8 from '@/public/p8.png'
import p9 from '@/public/p9.png'
import p10 from '@/public/p10.png'
import p11 from '@/public/p11.png'
import p12 from '@/public/p12.png'
import p13 from '@/public/p13.png'
import p14 from '@/public/p14.png'
import p15 from '@/public/p15.png'
import p16 from '@/public/p16.png'

import Creators from './(components)/Creators/creators'
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
<div className='container py-5 md:mx-auto sm:mx-[150px] lg:mx-[150px] grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
<Trendings src1={img1.src} src2={img2.src}  heading="DSGN Animals"/>
<Trendings src1={img3.src} src2={img3.src} heading="Magic Mushrooms"/>
<Trendings src1={img4.src} src2={img4.src}  heading="Disco Machines"/>

</div>

<div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-9 px-4 '>
<div> 
  <h1 className='text-3xl font-bold py-3'>Top Creators</h1>
  <p>Checkout Top Rated Creators on the NFT Marketplace</p>
</div>
<div></div>
<div className=''>
  <Button title='View Ranking ' iconComp={<GoRocket />}  />
</div>  
</div>
<div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5'>

<Creators source={p5.src} Fname="Keepitreal" Tsale="3.4" num="1" />
<Creators source={p6.src} Fname="DigiLab" Tsale="3.4" num="2" />
<Creators source={p7.src} Fname="GravityOne" Tsale="3.4" num="3" />
<Creators source={p8.src} Fname="Juanie" Tsale="3.4" num="4" />
<Creators source={p9.src} Fname="BlueWhale" Tsale="3.4" num="5" />
<Creators source={p10.src} Fname="Mr fox" Tsale="3.4" num="6" />
<Creators source={p11.src} Fname="Shroomie" Tsale="3.4" num="7" />
<Creators source={p12.src} Fname="Robotica" Tsale="3.4" num="8" />
<Creators source={p13.src} Fname="RustyRobot" Tsale="3.4" num="9" />
<Creators source={p14.src} Fname="Animakid" Tsale="3.4" num="10" />
<Creators source={p15.src} Fname="Dotgu" Tsale="3.4" num="11" />
<Creators source={p16.src} Fname="Ghiblier" Tsale="3.4" num="12" />

</div>

    </div>
  )
}

export default Home