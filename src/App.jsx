
import Home from './Home'
import {useState} from 'react'
import ContextApi from '../src/context/ContextApi'
import About from './About'
import MotivationalQuotes from './MotivationalQuotes'

function App() {
const [seen, setSeen] = useState(false)
  return (
    <>
     <main className=''>
      <ContextApi.Provider value={{seen, setSeen}}>

<section>

<Home/>

</section>





<section className=''>

<About/>

</section>





<section className='mt-[1500px] max-sm:mt-[2000px]'>

<MotivationalQuotes/>

</section>







     </ContextApi.Provider>

     </main>
    </>
  )
}

export default App
