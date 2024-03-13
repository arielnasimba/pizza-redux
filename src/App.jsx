import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <body className='w-[100dvw] min-h-[100dvh]  flex'>

      <div className="test list pizza w-[80%] min-h-[70dvh] bg-white m-auto">

          <Card />



      </div>
      
    </body>

    </>
  )
}

export default App
