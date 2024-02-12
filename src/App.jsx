import Home from './Home'
import { useState, useRef } from 'react'
import ContextApi from '../src/context/ContextApi'
import About from './About'
import MotivationalQuotes from './MotivationalQuotes'
import Classes from './Classes'
import ClasseSchedule from './ClasseSchedule'
import Trainers from './Trainers'
import { motion } from "framer-motion"
import FramerAnimate from './FramerAnimate'


function App() {
    const [seen, setSeen] = useState(false)
    const [active, setActive] = useState('first')
    const [hover, setHover] = useState('')
    const backToTop = useRef(null)

    const handleScroll = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>

            <main style={{ overflow: "scroll" }}

            
                className='w-auto h-auto'>

                <ContextApi.Provider value={{ seen, setSeen, active, setActive, backToTop, handleScroll, hover, setHover }}>

                        <section className='p-3 '>
                            <Home />
                        </section>

                        <FramerAnimate>

                        <section className='p-3'>
                        <FramerAnimate>

                            <About />
                            </FramerAnimate>

                        </section>
                        
                        <section className='mt-[1500px] max-sm:mt-[2000px]'>
                        <FramerAnimate>

                            <MotivationalQuotes />
                            </FramerAnimate>

                        </section>
                        <section className='pl-4'>
                        <FramerAnimate>

                            <Classes />
                            </FramerAnimate>

                        </section>


                        <section>
                        <FramerAnimate>

                            <ClasseSchedule />
                            </FramerAnimate>

                        </section>


                        <section className='p-10'>
                        <FramerAnimate>

                            <Trainers />
                            </FramerAnimate>

                        </section>
                        </FramerAnimate>

                </ContextApi.Provider>

            </main>

        </>
    )
}

export default App
