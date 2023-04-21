import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '.Header'
import formulario from '.Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">

        <Header/>
        <Formulario/>
    </div>
    
  )
}

export default App
