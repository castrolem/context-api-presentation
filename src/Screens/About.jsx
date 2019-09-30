import React from 'react'
import { useHeaderTitle } from '../Components/Header/Provider'

export const About = () => {
  const { setTitle } = useHeaderTitle()
  setTitle('About')

  return (
    <div className='content'>
      <p>All about the company here</p>
    </div>
  )
}
