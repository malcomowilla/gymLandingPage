import {useContext} from 'react'
import ContextApi from '../src/context/ContextApi'



const Home = () => {

    const {seen, setSeen} = useContext(ContextApi)
  return (
    <>
    
    <div className='translate-x-[50px] md:max-xl:hidden lg:hidden  '>
<ion-icon   onClick={()=> setSeen(!seen)} size='large'  name={`${seen ? 'close' : 'menu-outline'}`} className=''></ion-icon>
</div>
    
    {/* <img src="../src/images/icons8-bars-50.png" alt="" className='max-sm:ml-[500px] lg:hidden'  onClick={()=> setSeen(!seen)}/> */}
    <div className='relative  w-full h-full z-50   max-sm:top-[-10px]    md:top-[70px]'>
            <video autoPlay loop  className="absolute  object-cover 
            md:top-[60px] 
            sm:top-[70px] 
             max-sm:top-[120px] 
           w-[100%]  h-[800px] mix-blend-multiply
              " muted >
<source  src="../images/gym-video.mp4"  type="video/mp4"></source>
        </video>

<header className=' lg:bg-black   lg:bg-opacity-50 md:bg-black
 relative lg:top-[-100px]  h-[100px] text-white  max-sm:flex md:bg-opacity-20  md:top-[-90px]'>
    
    
    <div className='ml-[120px] mt-[30px] max-sm:mt-[-170px]  
      md:translate-y-[-7px]  lg:text-4xl  sm:translate-y-[-60px]
     md:text-4xl max-sm:text-4xl  lg:translate-y-[-2px] sm:text-3xl '>
<p className='font-extrabold max-sm:text-black md:text-black sm:text-black '>TRAINING <span className='text-orange-500'>STUDIO</span></p>

</div>



<div className={`max-sm:relative   max-sm:right-[190px]  md:flex  lg:flex lg:justify-evenly
 ${seen ?  ' top-0 transition-all duration-500 ease-in z-50 ' : 'top-[-600px]  '} `}>

    <ul className={`flex lg:flex-row   lg:justify-between  sm:gap-6 max-sm:bg-opacity-50
    sm:text-white  sm:flex-col sm:justify-center sm:items-center sm:bg-black sm:h-[400px] sm:w-[600px] sm:bg-opacity-50 sm:relative
    sm:left-[70px] md:bg-transparent     md:h-auto   md:max-xl:top-[-50px]  md:max-xl:left-[200px]
     lg:space-y-[-70px] max-sm:justify-center max-sm:items-center max-sm:bg-black  max-sm:z-50  max-sm:text-white
      max-sm:flex-col md:flex-row md:gap-11      max-sm:w-0.5   max-sm:h-[400px] max-sm:gap-[20px] 
      cursor-pointer  transition-all duration-500 ease-in max-sm:relative md:text-black md:text-xl lg:top-10
      md:translate-y-10 lg:translate-y-0 max-sm:right-[40px] lg:text-sm lg:p-3
      ${seen ?  ' top-0 transition-all duration-500 ease-in z-50 ' : 'top-[-600px]  '}
     `}> 
        <li className='lg:mt-[-70px]'>HOME</li>
        <li>ABOUT</li>
        <li>CLASSES</li>
        <li>SCHEDULES</li>
        <li>CONTACT</li>
        <li className='bg-orange-500 p-4 lg:text-sm  rounded-md'>SIGN UP</li>
    </ul>
    </div>

    </header>   

    <div className="relative md:top-[-80px]  bg-black  sm:top-[-80px] bg-opacity-70 
     text-center h-[800px]   w-[100%]   max-sm:z-0  
    max-sm:bottom-[-50px]  lg:top-[-35px] flex justify-center items-center">
        <div className='lg:translate-y-[-190px]  max-sm:max-w-[280px] '>
         <p className="  text-white lg:text-2xl font-bold mt-[250px] md:text-2xl max-sm:text-sm  
         sm:text-xl ">WORK HARDER, GET STRONGER</p>
         <h1 className=' lg:text-6xl md:text-6xl max-sm:text-4xl font-extrabold text-white  
         sm:text-xs'>EASY WITH OUR <span className='text-orange-700'>GYM</span></h1>
         <button className=' text-white mt-11 bg-orange-700 lg:p-4 md:p-5 max-sm:p-2 sm:p-3 sm:rounded-sm 
          sm:text-xs md:text-xl'>BECOME A MEMBER
         </button>
         </div>
    </div>

        </div>
        </>
  )
}

export default Home

















