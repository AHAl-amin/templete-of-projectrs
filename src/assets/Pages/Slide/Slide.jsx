import React from 'react'
import Marquee from 'react-fast-marquee'

function Slide() {
  return (
    <div>
      <Marquee speed={100} pauseOnHover={true}  className=''>

        <div className='flex gap-10 shadow-transparent justify-between'>

          <div className='h-[500px] w-[500px] shadow border border-red-600 shadow-emerald-300 '>
            <img className='h-[300px] w-full' src="https://img.freepik.com/free-photo/posing-athletes-holding-weights_23-2148398787.jpg?t=st=1742887071~exp=1742890671~hmac=714bc9a2534360247b1118844f796586f3ace16438cfd02e4fdc22d386066829&w=740" alt="" />
           <div className='p-2'>
           <h1>hello heading</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi voluptas nam minus dolore consequuntur debitis dolores molestiae doloremque odio.</p>
           </div>
          </div>
          <div className='h-[500px] w-[500px] shadow border border-red-600 shadow-emerald-300'>
            <img className='h-[300px] w-full' src="https://img.freepik.com/free-photo/posing-athletes-holding-weights_23-2148398787.jpg?t=st=1742887071~exp=1742890671~hmac=714bc9a2534360247b1118844f796586f3ace16438cfd02e4fdc22d386066829&w=740" alt="" />
            <h1>hello heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi voluptas nam minus dolore consequuntur debitis dolores molestiae doloremque odio.</p>
          </div>
          <div className='h-[500px] w-[500px] shadow border border-red-600 shadow-emerald-300'>
            <img className='h-[300px] w-full' src="https://img.freepik.com/free-photo/posing-athletes-holding-weights_23-2148398787.jpg?t=st=1742887071~exp=1742890671~hmac=714bc9a2534360247b1118844f796586f3ace16438cfd02e4fdc22d386066829&w=740" alt="" />
            <h1>hello heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi voluptas nam minus dolore consequuntur debitis dolores molestiae doloremque odio.</p>
          </div>
          <div className='h-[500px] w-[500px] shadow border border-red-600 shadow-emerald-300'>
            <img className='h-[300px] w-full' src="https://img.freepik.com/free-photo/posing-athletes-holding-weights_23-2148398787.jpg?t=st=1742887071~exp=1742890671~hmac=714bc9a2534360247b1118844f796586f3ace16438cfd02e4fdc22d386066829&w=740" alt="" />
            <h1>hello heading</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi voluptas nam minus dolore consequuntur debitis dolores molestiae doloremque odio.</p>
          </div>
          <div>
            
          </div>
       
       
         
      


        </div>

      </Marquee>
    </div>
  )
}

export default Slide