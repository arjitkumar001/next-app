
import Image from 'next/image'
import style from '../app/page.module.css'


export default function home() {

  return (
   <>
   <p>adding css with page.module.css file</p>
   <h1 className={style.heading}>This is home page</h1>
   <p>import image with Image from next/image</p>
   <Image src='/assets/image.jpg' alt='image not found' height={300} width={500} />
   
   
   </>
  )
}
