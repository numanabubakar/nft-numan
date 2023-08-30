import Image from 'next/image'
import React from 'react'
import p5 from '@/public/p5.png'
interface Data {
    source?: string  ;
    Fname:string;
    Tsale:string;
    num:string;
}
function Creators(props:Data) {
  return (
<div className='bg-[#3B3B3B] rounded-lg p-4'>
<p className='bg-[#2B2B2B] rounded-full w-6 h-6 text-[#858584] flex item-center justify-center'>{props.num}</p>
    <div className='bg-[#3B3B3B] rounded-lg flex justify-content items-center  '>
        
        <div className='text-center mx-auto'>

<Image src={props.source!} alt='hello' width={150} height={100} />
<p className='font-bold'>{props.Fname}</p>
<p>Total Sales: {props.Tsale} ETH</p>
        </div>
    </div>
</div>
  )
}

export default Creators