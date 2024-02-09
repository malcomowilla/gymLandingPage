import {useContext} from 'react'
import ContextApi from '../src/context/ContextApi'



const Home = () => {

    const {seen, setSeen} = useContext(ContextApi)
  return (
    <>
    <div  onClick={()=> setSeen(!seen)} className={`relative md:left-6 lg:hidden 
     max-sm:relative  sm:left-[] md:hidden
     
    max-sm:w-[100px] max-sm:h-[100px] bg-slate-300  sm:w-[100px] sm:h-[100px]    rounded-full  flex justify-center items-center `}>
<ion-icon name={`${seen ? 'close' : 'menu'}`} className=''></ion-icon>

    </div>
    {/* <img src="../src/images/icons8-bars-50.png" alt="" className='max-sm:ml-[500px] lg:hidden'  onClick={()=> setSeen(!seen)}/> */}
    <div className='relative w-full h-full z-10   max-sm:top-[-10px]  md:top-[70px] '>
            <video autoPlay loop  className="absolute     object-cover 
            md:top-[60px]    lg:top-[-250px] 
             max-sm:top-[20px]
            w-full h-full 
              " muted >
<source  src="../src/images/gym-video.mp4"  type="video/mp4"></source>
        </video>

<header className=' lg:bg-white   lg:bg-opacity-50 md:bg-black
 relative lg:top-[-100px]  h-[100px] text-white  max-sm:flex md:bg-opacity-20  md:top-[-90px]'>
    
    
    <div className='ml-[120px] mt-[30px] max-sm:mt-[-170px]  
      md:translate-y-[-7px]  lg:text-4xl  sm:translate-y-[-90px]
     md:text-4xl max-sm:text-4xl  lg:translate-y-[-2px] sm:text-3xl '>
<p className='font-extrabold max-sm:text-black md:text-black sm:text-black '>TRAINING <span className='text-orange-500'>STUDIO</span></p>

</div>



<div className={`max-sm:relative   max-sm:right-[190px]  md:flex
 ${seen ?  ' top-0 transition-all duration-500 ease-in z-50 ' : 'top-[-600px]  '} `}>

    <ul className='flex lg:flex-row  lg:gap-[10vw] lg:justify-center lg:bg-transparent lg:h-auto lg:w-auto
    sm:text-white sm:flex-col sm:justify-center sm:items-center sm:bg-black sm:h-[400px] sm:w-[600px] sm:relative
    sm:left-[70px] md:bg-transparent md:h-auto md:w-auto sm:top-[-40px]
     lg:space-y-[-30px] max-sm:justify-center max-sm:items-center max-sm:bg-black  max-sm:z-50  max-sm:text-white
      max-sm:flex-col md:flex-row md:gap-11       max-sm:h-[400px] max-sm:gap-[20px] 
      cursor-pointer  transition-all duration-500 ease-in max-sm:relative md:text-black md:text-xs lg:top-10
      md:translate-y-10 lg:translate-y-0 max-sm:right-[40px]
     '> 
        <li className='lg:mt-[-29px]'>HOME</li>
        <li>ABOUT</li>
        <li>CLASSES</li>
        <li>SCHEDULES</li>
        <li>CONTACT</li>
        <li className='bg-orange-500 p-3 h-[40px] text-sm w-[90px] rounded-sm'>SIGN UP</li>
    </ul>
    </div>

    </header>   

    <div className="relative md:top-[-300px]  bg-black  sm:top-[-350px] bg-opacity-60 
     text-center max-h-screen min-h-screen w-full max-sm:z-0 sm:bg-gray-900 sm:bg-opacity-50 
    max-sm:bottom-[350px]  lg:top-[-350px]">
        <div className='translate-y-[290px]'>
         <p className="  text-white lg:text-2xl font-bold mt-[250px] md:text-2xl max-sm:text-sm  
         sm:text-xl ">WORK HARDER, GET STRONGER</p>
         <h1 className=' lg:text-8xl md:text-6xl max-sm:text-4xl font-extrabold text-white 
         sm:text-5xl'>EASY WITH OUR <span className='text-orange-700'>GYM</span></h1>
         <button className=' text-white mt-11 bg-orange-700 lg:p-4 md:p-3.5 max-sm:p-2 sm:p-3 sm:rounded-sm 
          sm:text-xs'>BECOME A MEMBER
         </button>
         </div>
    </div>

        </div>
        </>
  )
}

export default Home

















