import React, { useEffect } from 'react'
import { useEvent } from 'my-event'
function testFunc() {
  console.log('testtt')
}

export function Test() {
  const test = useEvent()

  useEffect(() => {
    test.sub('test', testFunc)
    testFunc()
  }, [])

  return (
    <>
      <p>this is test</p>
      <button onClick={() => test.dispatch('test')}>test</button>
    </>
  )
}
