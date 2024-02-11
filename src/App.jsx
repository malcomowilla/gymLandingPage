
import Home from './Home'
import {useState} from 'react'
import ContextApi from '../src/context/ContextApi'
import About from './About'
import MotivationalQuotes from './MotivationalQuotes'
import Classes  from './Classes'
import ClasseSchedule  from './ClasseSchedule'
import Trainers  from './Trainers'

function App() {
const [seen, setSeen] = useState(false)
const [active, setActive] = useState('first')
  return (
    <>
     <main className=''>
      <ContextApi.Provider value={{seen, setSeen,  active, setActive}}>

<section>

<Home/>

</section>





<section className=''>

<About/>

</section>





<section className='mt-[1500px] max-sm:mt-[2000px]'>

<MotivationalQuotes/>

</section>



<section className='mt-[px]'>
<Classes/>
</section>


<section>

<ClasseSchedule/>

</section>



      <section>

      <Trainers/>


      </section>


     </ContextApi.Provider>

     </main>
    </>
  )
}

export default App
