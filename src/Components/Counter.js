import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
  return (
    <div className='ps-2 mb-5'>
        <h4> Create Basic setup of counter app using react-redux.</h4>
        <h4> Task 1 : using if...else</h4>
        <h4>Counter : {count}</h4>
        <button className='btn btn-secondary me-2' onClick={() => dispatch({ type: "Increment" })}>Increment</button>
        <button className='btn btn-secondary' onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  )
}

export default Counter