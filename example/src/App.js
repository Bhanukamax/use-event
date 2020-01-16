import React from 'react'
import { useMyHook, useEvent, EventProvider } from 'my-event'
import { Test } from './Test'

const App = () => {
  const example = useMyHook()

  return (
    <EventProvider>
      <div>{example}</div>
      <Test />
    </EventProvider>
  )
}
export default App

