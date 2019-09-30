import React from 'react'
import { useHeaderTitle } from '../Components/Header/Provider'

export const Home = () => {
  const { setTitle } = useHeaderTitle()
  setTitle('Home')
  return (
    <div className='content'>
      <p>Amazing caption here</p>
    </div>
  )
}
