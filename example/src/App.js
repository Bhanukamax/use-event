import React from 'react'
import { useMyHook } from 'my-event'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App