import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter2() {
    const count = useSelector((state) => state.counter2.count)
    const dispatch = useDispatch()
  return (
    <div className='ps-2'>
      <h4>Task 2 : using switch case</h4>
        <h4 className=''>Counter : {count}</h4>
        <button className='btn btn-secondary me-2' onClick={() => dispatch({ type: "inc" })}>Increment</button>
        <button className='btn btn-secondary' onClick={() => dispatch({ type: "dec" })}>Decrement</button>
    </div>
  )
}

export default Counter2