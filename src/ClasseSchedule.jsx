


import ScheduleTable  from './ScheduleTable'






const ClasseSchedule = () => {
  return (
    <div className='w-full h-full  relative max-sm:top-[950px] lg:top-[600px]  md:top-[500px] sm:top-[500px]'>


        
        <div className=' flex justify-center items-center   '>


        <div className='absolute  max-sm:mb-[600px] sm:mb-[600px]  lg:mb-[560px]'>
<div className='flex justify-center '>
<h4 className='text-white font-extrabold lg:text-3xl'>CLASSES <span className='text-orange-700'>SCHEDULE</span></h4>

</div>

<div className='flex justify-center '>
<img src="/images/line-dec.png" alt="" />
</div>
<div className=''>

<p className='text-white font-thin mt-4  max-w-[400px]'>
Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor
, ultricies fermentum massa consequat eu.
</p>
</div>


            
</div>
<ScheduleTable/>

    <img src="/images/schedule-bg.jpg " alt="yoga image" className=' w-[100%]  object-cover  
     max-sm:h-[800px]  md:h-[800px] min-w-[100%] max-w-[100%]
    sm:h-[800px]  '  />
        
        </div>
        

        
        
        
        
        
        
        </div>
  )
}

export default ClasseSchedule