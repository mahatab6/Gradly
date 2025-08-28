import React from 'react'
import { Link } from 'react-router'

export default function Logo() {
  return (
    <div>
        <Link to={'/'} className='text-2xl font-bold text-blue-600'>Gradly</Link>
    </div>
  )
}
