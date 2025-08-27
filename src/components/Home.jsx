import React from 'react'
import research from '../assets/Research paper.gif'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className='bg-white'>
        <div className='flex flex-col-reverse md:flex-row justify-items-center  md:justify-between items-center min-h-screen  w-11/12 mx-auto'>
        <div className='flex-col space-y-3'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold text-black'>🎓 Stay Organized,<br /> Study Smarter with <br /> Gradly</h1>
            <p className='text-xl font-semibold text-black'>Gradly is your all-in-one student toolkit — <br /> track classes, plan studies, manage budget, <br /> and prepare for exams, all in one place.</p>
            <div className='md:flex gap-3 space-y-2'>
                <Link to={"/login"} className='btn hover:bg-purple-600 border-none hover:cursor-pointer px-3 py-2 text-xl font-medium rounded-2xl'>Get Started Free</Link>
                <button className='btn hover:cursor-pointer border-none hover:bg-purple-600 px-3 py-2 text-xl font-medium rounded-2xl'>🚀 Explore Dashboard</button>
            </div>
        </div>
        <img src={research} alt="" />
    </div>
    </div>
  )
}
