import React from 'react'
import Navbar from '../Nav/Navbar'

function Cart() {
  return (
    <div className='cart'>
      <div className='text-info text-align-center w-fit m-auto'>
        You have 0 Cart Items</div>
      <img src="/images.png" alt="" className='cartImage m-auto' />
    </div>
  )
}

export default Cart