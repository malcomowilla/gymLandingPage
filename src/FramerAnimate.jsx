import { useRef, useEffect} from 'react'

import { motion, useInView, useAnimationControls } from "framer-motion"



const FramerAnimate = ({children}) => {
  const controls = useAnimationControls()


  const allComponets = useRef(null)
   const isInView = useInView(allComponets, {once: true})
  useEffect(() => {

    console.log(`${isInView}`)



    if (isInView) {
      controls.start("visible")

    }
  }, [isInView]);
  
  return (
    <>
    <motion.main  className='relative'ref={allComponets}   
    
    variants={{
      hidden: {
          opacity: 0,
          y: 250
      },
      visible: {
          opacity: 1,
          y: 0
      }
  }}

  transition={{
      duration: 2,
      delay: 0.5
  }}

  initial='hidden'
  animate={controls}
    
    
    >

{children}

    </motion.main>

    </>
  )
}

export default FramerAnimate