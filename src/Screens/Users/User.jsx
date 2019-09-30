import React from 'react'
import { useHeaderTitle } from '../../Components/Header/Provider'

export const User = ({ id, name, email }) => {
  const { setTitle } = useHeaderTitle()
  setTitle(`${name}`)
  return (
    <div className='content'>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
    </div>
  )
}
