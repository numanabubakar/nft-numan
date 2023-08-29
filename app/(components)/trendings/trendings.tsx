import Image from "next/image"
import img1 from '@/public/p1.png'
import img2 from '@/public/p2.png'

interface Images {
    src1?: string  ;
    src2?: string  ;
    heading:string;
}

function Trendings(props:Images) {
  return (
    <div className="py-4 ">
<Image width={320} height={100}src={props.src1!} alt='trending' />
<div className="flex gap-2 py-2">

<Image width="100" height={100} src={props.src2!} alt='trending' />
<Image width={100}  height={100} src={props.src2!} alt='trending' />
<div className="bg-purple-600 rounded-lg w-24 h-24 text-center">
    <p className="flex items-center justify-center h-24">1025+</p>
</div>
</div>
<p className="text-xl font-bold">{props.heading}</p>

    </div>
  )
}

export default Trendings