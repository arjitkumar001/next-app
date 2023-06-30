'use client'
import Image from 'next/image'
import style from '../app/page.module.css'

import { useState } from 'react'

interface UserProps {
  name: string;
}

const home: React.FC = () => {
  //state management
  const [count, setCount] = useState(0)
  const handleUpdate = () => {
    setCount(count + 1)
  }
  //create component inside a component and call
  const innerComp=()=>{
    return <h1 className={style.innercomp}>I am InnerComponent</h1>
  }

  const fruit = (item: any) => {
    alert(item)
  }
   
  return (
    <>
      <p>adding css with page.module.css file</p>
      <h1 className={style.heading}>This is home page</h1>
      <p>import image with Image from next/image</p>
      <Image src='/assets/image.jpg' alt='image not found' height={300} width={500} />
      <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="" height={300} width={500} />

      <p>Function Call</p>
      <button onClick={() => fruit("apple")}>Fruit</button>
      {/* import font in next js */}
      <p>Font family in next js</p>

      <h1>update state in next js</h1>
      <h2>Count ={count}</h2>
      <button onClick={handleUpdate}>Update counter</button>

      <User name="Arjit" />

      {innerComp()}
  

    </>
  )
}
export default home;


const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      <p className={style.user}>How to get props value in Next js</p>
      <h1 className={`${style.userdata} ${style.user}`}>Hello My name is `{props.name}`</h1>
    </div>
  );
};