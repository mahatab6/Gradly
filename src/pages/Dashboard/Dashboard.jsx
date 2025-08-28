import { format } from 'date-fns';
import React from 'react'

export default function Dashboard() {
  
  const now = new Date();
  const fullDate = format(now,"EEEE, MMMM dd, yyyy")
  const time = format(now, "hh:mm a")
  return (
    <div className='w-11/12 mx-auto'>
      <div className='flex justify-between gap-5'>
        <div>
          <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold'>Welcome back, Student!</h2>
          <p className='text-base md:text-xl'>{fullDate}</p>
        </div>
        <div>
          <h2 className='text-xl md:text-3xl font-bold'>{time}</h2>
          <p className='text-base md:text-xl'>Current Time</p>
        </div>
      </div>
      
    </div>
  )
}
