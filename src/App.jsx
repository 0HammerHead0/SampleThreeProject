import { useState } from 'react'
import Experience from './Experience'
import './App.css'
import { Canvas } from 'react-three-fiber'

function App() {

  return (
    <> 
      <Canvas shadows>
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
