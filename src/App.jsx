
import Home from './Home'
import {useState} from 'react'
import ContextApi from '../src/context/ContextApi'



function App() {
const [seen, setSeen] = useState(false)
  return (
    <>
     <main className='l'>
      <ContextApi.Provider value={{seen, setSeen}}>


     <Home/>
     </ContextApi.Provider>

     </main>
    </>
  )
}

export default App
