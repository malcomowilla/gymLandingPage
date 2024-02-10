import SecondColumn  from './SecondColumn'
import FirstColumn  from './FirstColumn'
import ThirdColumn  from './ThirdColumn'
import FourthColumn from './FourthColumn'

import {useContext} from 'react'
import ContextApi from '../src/context/ContextApi'
import {useTransition } from "react"





const Classes = () => {
  const {active, setActive} = useContext(ContextApi)
  const [isPending, startTransition] = useTransition()


 const selectTab = (active)=> {
  startTransition(()=> {
    setActive(active)

  })
 }

  return (
    <div className=' 
      w-screen h-screen  mt-[450px]'>
        <div className='flex justify-center items-center flex-col '> 
<div className='text-center'>
<h4 className='font-extrabold lg:text-4xl  md:text-3xl max-sm:text-2xl sm:text-4xl'>OUR  <span className='text-orange-600'>  CLASSES</span></h4>
</div>
<div className='image flex justify-center items-center'><img src="/images/line-dec.png" alt="" /></div>

<div className='sentence  text-center font-extralight sm:text-xl '>
<p className='max-w-[500px]'>Nunc urna sem, laoreet 
    ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
    </div>

        </div>



<div className='flex  flex-row  gap-[10px] w-full  h-[500px]   justify-center mt-[150px]  flex-wrap
   max-sm:grid  md:grid   md:grid-auto-fit sm:grid  lg:pl-[300px] '>
        <div className=' 
           flex flex-col    gap-[100px] max-sm:grid '>

<div  onClick={()=> selectTab('first')} className='flex flex-row-reverse  gap-[40px] shadow-xl p-7 justify-center shrink h-auto
 sm:w-full lg:w-[400px] max-sm:p-4 '>
  <p className='sm:text-xl '>First Training Class</p>
<img src="/images/tabs-first-icon.png" alt="icon2-image" />
</div>




<div    onClick={()=> selectTab('second')}   className='flex   flex-row-reverse gap-[40px]  shadow-xl 
p-7 max-sm:p-4 justify-center shrink h-auto sm:w-full lg:w-[400px]'>
<p className='sm:text-xl' >Second Training Class</p>
<img src="/images/tabs-first-icon.png" alt="icon2-image" />
</div>




<div       onClick={()=> selectTab('third')}   className='flex flex-row-reverse gap-[40px] max-sm:p-4  shadow-xl p-7 justify-center shrink h-auto sm:w-full lg:w-[400px]'>
<p className='sm:text-xl'>Third Training Class</p>
<img src="/images/tabs-first-icon.png" alt="icon2-image" />
</div>



<div    onClick={()=> selectTab('fourth')}    className='flex flex-row-reverse    gap-[40px]  max-sm:p-4 shadow-xl p-7 justify-center shrink h-auto sm:w-full lg:w-[400px]'>
<p   className='sm:text-xl'>Fourth Training Class</p>
<img src="/images/tabs-first-icon.png" alt="icon2-image" />
</div>


<div className='flex justify-center items-center'>
<button className='bg-orange-700 p-4 h-[50px] rounded-md sm:text-l text-white ' >

View All Schedules</button>
</div>
</div>




<div className=' '>


{ active === 'first' && <FirstColumn/>}

{ active === 'second' && <SecondColumn/>}
{ active === 'third' && <ThirdColumn/>}
{ active === 'fourth' && <FourthColumn/>}

</div> 

        </div>
        
        </div>
  )
}

export default Classes





























