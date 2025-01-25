import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'

const OrderDetails = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
            <Title text1={'ORDER'} text2={'DETAILS'} />
        </div>
        <div className='flex flex-col items-center gap-6'>
            {/* Order information */}
            <div className='w-full'>
                <p>Order #: UA9389348393</p>
                <p>Date: 09 Jun, 2024</p>
                <p>Payment: Stripe</p>
                <p>Total: $80</p>
                <p>Status: Order Placed</p>
            </div>
            {/* Order items */}
            <div className='w-full'>
                <div className='border-t flex flex-col sm:flex-row justify-between px-8 py-4'>
                    <div className='flex gap-10'>
                        <p>Image</p>
                        <p>Description of product</p>
                    </div>
                    <div className='flex gap-10'>
                        <p>Size: 8</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
                <div className='border-t flex flex-col sm:flex-row justify-between px-8 py-4'>
                    <div className='flex gap-10'>
                        <p>Image</p>
                        <p>Description of product</p>
                    </div>
                    <div className='flex gap-10'>
                        <p>Size: 8</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
                <div className='border-t flex flex-col sm:flex-row justify-between px-8 py-4'>
                    <div className='flex gap-10'>
                        <p>Image</p>
                        <p>Description of product</p>
                    </div>
                    <div className='flex gap-10'>
                        <p>Size: 8</p>
                        <p>Quantity: 1</p>
                    </div>
                </div>
            </div>
            
            <p className='text-blue-500'>Return to orders</p>

        </div>
        
    </div>
  )
}

export default OrderDetails
