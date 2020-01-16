import * as React from 'react'
import { createContext, useState, useEffect } from 'react'
import { EventEmitter } from 'events'

export const useMyHook = () => {
  let [{ counter }, setState] = React.useState({
    counter: 0
  })

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      counter++
      setState({ counter })
    }, 1000)
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return counter
}

export const EventContext = createContext()
export function useEvent() {
  const [state, setState] = useState()
  const ev = React.useContext(EventContext)
  return ev
}

// export const useMyEvent = useEventHook()

class MyEmitter {
  constructor() {
    this.emitter = new EventEmitter()
    this.sub = this.sub.bind(this)
    this.unsub = this.unsub.bind(this)
  }

  sub(event, listener) {
    this.emitter.addListener(event, listener)
  }

  unsub(event) {
    this.emitter.removeAllListeners(event)
  }
  dispatch(eventName) {
    this.emitter.emit(eventName)
  }
}

let em = null
function getEmmiter() {
  if (em) {
    return em
  } else {
    em = new MyEmitter()
    return em
  }
}

export const EventProvider = ({ children }) => {
  const emitter = new MyEmitter()
  return (
    <EventContext.Provider value={getEmmiter()}>
      {children}
    </EventContext.Provider>
  )
}
