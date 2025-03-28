import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {
      // Add all example components:
      <Button1 buttonText="Example 1" />
      <Button2 buttonText="Example 2" />
      <Button3 buttonText="Example 3" />
      <Button4 buttonText="Example 4" />
      <Button5 buttonText="Example 5" />
    }
  </div>
  )
}

export default App
