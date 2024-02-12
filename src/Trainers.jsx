
const Trainers = () => {
  return (



    <div className='flex justify-center  items-center w-full h-screen  lg:mt-[400px] max-sm:mt-[500px]   md:mt-[200px] relative'>
<div className='text-black flex justify-center items-center lg:translate-y-[-90px]  px-[50px] pl-10  flex-col  max-sm:translate-y-[450px] '>
<h3 className='font-extrabold max-sm:text-xl'>EXPERT<span className='text-orange-600'> TRAINERS</span></h3>
<img src="/images/line-dec.png"  className='mt-[10px]' alt="" />
<p className='mt-[20px] max-w-[500px] font-thin'>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, 
    ultricies fermentum massa consequat eu.</p> 

</div>





<div className="grid border border-gray-200 rounded-lg  dark:border-gray-700 mb-[500px] absolute 
 md:grid-cols-2 gap-10  shadow-2xl  bg-white dark:bg-gray-800  max-sm:translate-y-[1650px] translate-y-[500px] ">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
            <p className="my-4">If you care for your time, I hands down would go with this."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-[100%] " 
            src="/images/first-trainer.jpg" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div className='font-extrabold text-2xl'>Bonnie Green</div>
                <div className="text-sm text-red-500 dark:text-gray-400 ">Strength Trainer</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
            <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-[100%] " 
            src="/images/second-trainer.jpg"
             alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div className='font-extrabold text-2xl'>Roberta Casas</div>
                <div className="text-sm text-orange-500 dark:text-gray-400 ">Muscle Trainer</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
            <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
            <img className="rounded-full w-[100%]"
             src="/images/third-trainer.jpg" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div className='text-2xl font-extrabold'>Jese Leos</div>
                <div className="text-sm text-orange-500 dark:text-gray-400">Power Trainer</div>
            </div>
        </figcaption>    
    </figure>
    
</div> 

</div>



  )
}

export default Trainers